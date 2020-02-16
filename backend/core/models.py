from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.
from social_django.models import UserSocialAuth


class UserProfile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	pic = models.CharField(default=None, max_length=500, blank=True, null=True)
	score = models.IntegerField(default=0)
	level = models.IntegerField(default=1)
	submission_count = models.IntegerField(default=0)
	fid = models.CharField(max_length=100, default=None, blank=True, null=True)

	class Meta:
		ordering = ['-score', 'submission_count', 'level']

	def __str__(self):
		return str(self.user) + ' ' + str(self.score)

	def save(self, *args, **kwargs):

		facebook = self.user.social_auth.get(provider='facebook')
		self.fid = facebook.uid
		picture = facebook.extra_data.get('picture')
		picturedata = picture.get('data')
		pictureurl = picturedata.get('url')
		self.pic = pictureurl

		super().save(*args, **kwargs)


def CheckHappyHour(start, now, end):
	for i in range(len(start)):
		if start[i] <= now <= end[i]:
			return True
	return False


class Question(models.Model):
	ques = models.CharField(max_length=2000)
	hint = models.CharField(max_length=1000)
	no = models.IntegerField(default=1)

	def __str__(self):
		return str(self.no) + ' ' + str(self.ques)

	class Meta:
		ordering = ['no']


class HintModel(models.Model):
	ques = models.OneToOneField(Question, on_delete=models.CASCADE)
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	hintviewed = models.BooleanField(default=False)

	def __str__(self):
		return str(self.ques.no) + ' ' + str(self.user)


class Answer(models.Model):
	ques = models.ForeignKey(Question, on_delete=models.CASCADE)
	answer = models.CharField(max_length=100)

	def __str__(self):
		return str(self.answer)


class Submission(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	ques = models.ForeignKey(Question, on_delete=models.CASCADE)
	answer = models.CharField(max_length=100)
	date = models.DateTimeField(auto_created=True, auto_now_add=True)
	score = models.IntegerField(blank=True, null=True)
	status = models.CharField(default='Wrong', choices=(('Correct', 'Correct'), ('Wrong', 'Wrong')), max_length=10)
	hintviewed = models.BooleanField(default=False)

	def __str__(self):
		return str(self.user)

	def save(self, *args, **kwargs):
		if HintModel.objects.filter(user=self.user, hintviewed=True):
			self.hintviewed = True

		scores = Submission.objects.filter(ques=self.ques, status='Correct', hintviewed=False).values_list('score',flat=True)
		if len(scores):
			score = min(scores)
		else:
			score = 101
		answers = Answer.objects.filter(ques=self.ques).values_list('answer', flat=True)

		if self.answer.lower() in answers and self.user.userprofile.submission_count <= 2500:
			self.status = 'Correct'
			self.user.userprofile.level += 1
			self.user.userprofile.submission_count += 1

			start = HappyHour.objects.all().values_list('start',flat=True)
			end = HappyHour.objects.all().values_list('end',flat=True)
			hintbool = HintModel.objects.all().filter(user=self.user, ques=self.ques, hintviewed=True)
			now = timezone.now()

			#### Marking Scheme ####

			if CheckHappyHour(start, now, end):
				self.score = 100
			elif self.hintviewed:
				if score > 40:
					self.score = score - 21
				else:
					self.score = 20
			else:
				if score > 20:
					self.score = score - 1
				else:
					self.score = 20

			self.user.userprofile.score += self.score
		else:
			self.score = 0
			self.user.userprofile.level += 1
			self.user.userprofile.submission_count += 1

		super().save(*args, **kwargs)


class HappyHour(models.Model):
	start = models.DateTimeField()
	end = models.DateTimeField()

	def __str__(self):
		return str(self.start.time()) + ' - ' + str(self.end.time())
