from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from social_django.models import UserSocialAuth


class UserProfile(models.Model):
    name = models.CharField(default=None, max_length=70, blank=True, null=True)
    pic = models.CharField(default=None, max_length=500, blank=True, null=True)
    score = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    submission_count = models.IntegerField(default=0)
    fid = models.CharField(max_length=100, default=None, blank=False, null=False, unique=True)

    class Meta:
        ordering = ['-score', '-level', 'submission_count']

    def __str__(self):
        return str(self.name) + ' ' + str(self.score)


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
    ques = models.ForeignKey(Question, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, blank=True)
    hint = models.CharField(max_length=100, default=None, blank=True, null=True)
    fid = models.CharField(max_length=100, default=None, blank=True, null=True)
    hintviewed = models.BooleanField(default=True)

    def __str__(self):
        return str(self.user)

    def save(self, *args, **kwargs):
        self.user = UserProfile.objects.get(fid=self.fid)
        level = self.user.level
        self.ques = Question.objects.get(no=level)
        self.hint = self.ques.hint
        if self.hint.lower() == 'not available':
            self.hintviewed = False
        try:
            prev = HintModel.objects.get(user=self.user, ques=self.ques)
            prev.delete()
        except:
            pass

        super().save(*args, **kwargs)

    # class Meta:
    #     unique_together = ['ques', 'user']


class Answer(models.Model):
    ques = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.answer = self.answer.lower()
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.answer)


class Submission(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, blank=True, null=True)
    # user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    fid = models.CharField(max_length=100, default=None, blank=True, null=True)
    ques = models.ForeignKey(Question, on_delete=models.CASCADE, default=None, blank=True, null=True)
    answer = models.CharField(max_length=100)
    date = models.DateTimeField(auto_created=True, auto_now_add=True)
    score = models.IntegerField(blank=True, null=True)
    response = models.CharField(default='Wrong', choices=(('Correct', 'Correct'), ('Wrong', 'Wrong')), max_length=10)
    hintviewed = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user)

    def save(self, *args, **kwargs):
        self.user = UserProfile.objects.get(fid=self.fid)
        level = self.user.level
        self.ques = Question.objects.get(no=level)
        if HintModel.objects.filter(user=self.user, ques=self.ques, hintviewed=True):
            self.hintviewed = True

        max_score = 100
        scores_without_hint = Submission.objects.filter(ques=self.ques, response='Correct', hintviewed=False).values_list('score',
                                                                                                           flat=True)
        scores_with_hint = Submission.objects.filter(ques=self.ques, response='Correct', hintviewed=True).values_list('score',flat=True)

        if len(scores_without_hint) == 0:
            score_hint = 100
        else:
            score_hint = min(scores_with_hint)
        if len(scores_with_hint) == 0:
            score_no_hint = 80
        else:
            score_no_hint = min(scores_with_hint)

        answers = Answer.objects.filter(ques=self.ques).values_list('answer', flat=True)

        if self.answer.lower() in answers and self.user.submission_count <= 2500:
            self.response = 'Correct'
            self.user.level += 1
            self.user.submission_count += 1

            start = HappyHour.objects.all().values_list('start', flat=True)
            end = HappyHour.objects.all().values_list('end', flat=True)
            now = timezone.now()

            #### Marking Scheme ####

            if CheckHappyHour(start, now, end):
                score = 100
            elif self.hintviewed:
                score = min(score_no_hint, score_hint) - 5
            else:
                score = min(max_score, scores_without_hint)

            if score < 20:
                score = 20
            self.score = score
            self.user.score += self.score
        else:
            self.score = 0
            self.response = 'Wrong'
            self.user.submission_count += 1
        self.user.save()
        super().save(*args, **kwargs)


class HappyHour(models.Model):
    start = models.DateTimeField()
    end = models.DateTimeField()

    def __str__(self):
        return str(self.start.time()) + ' - ' + str(self.end.time())
























# PREVIOUS MARKING SCHEME

    # def save(self, *args, **kwargs):
    #     self.user = UserProfile.objects.get(fid=self.fid)
    #     level = self.user.level
    #     self.ques = Question.objects.get(no=level)
    #     if HintModel.objects.filter(user=self.user, ques=self.ques, hintviewed=True):
    #         self.hintviewed = True
    #
    #     scores = Submission.objects.filter(ques=self.ques, response='Correct', hintviewed=False).values_list('score',
    #                                                                                                        flat=True)
    #     if len(scores) > 0:
    #         score = min(scores)
    #
    #     elif self.hintviewed == True:
    #         if len(scores) >0:
    #             score = min(scores) - 19
    #         if Submission.objects.filter(ques=self.ques, response='Correct', hintviewed=True).values_list('score',
    #                                                                                                        flat=True) == 1:
    #             scores = Submission.objects.filter(ques=self.ques, response='Correct', hintviewed=True).values_list('score',
    #                                                                                                        flat=True)
    #             score = min(scores) + 1
    #
    #         else: score = 101
    #     else:
    #         score = 101
    #
    #     answers = Answer.objects.filter(ques=self.ques).values_list('answer', flat=True)
    #
    #     if self.answer.lower() in answers and self.user.submission_count <= 2500:
    #         self.response = 'Correct'
    #         self.user.level += 1
    #         self.user.submission_count += 1
    #
    #         start = HappyHour.objects.all().values_list('start', flat=True)
    #         end = HappyHour.objects.all().values_list('end', flat=True)
    #         hintbool = HintModel.objects.all().filter(user=self.user, ques=self.ques, hintviewed=True)
    #         now = timezone.now()
    #
    #         #### Marking Scheme ####
    #
    #         if CheckHappyHour(start, now, end):
    #             self.score = 100
    #         elif self.hintviewed:
    #             if score > 40:
    #                 self.score = score - 21
    #             else:
    #                 self.score = 20
    #         else:
    #             if score > 20:
    #                 self.score = score - 1
    #             else:
    #                 self.score = 20
    #
    #         self.user.score += self.score
    #     else:
    #         self.score = 0
    #         self.response = 'Wrong'
    #         self.user.submission_count += 1
    #     self.user.save()
    #     super().save(*args, **kwargs)