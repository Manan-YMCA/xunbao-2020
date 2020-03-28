from django.contrib import admin
from .models import Question,Submission,Answer,HappyHour,HintModel,UserProfile

admin.site.site_header = 'XUNBAO 2020'


class SubmissionsAdmin(admin.ModelAdmin):
	list_display = ('user','answer','ques','score','response')
	list_display_links = ('user','answer','ques','score','response')
	list_max_show_all = 100


admin.site.register(Question)
admin.site.register(Submission, SubmissionsAdmin)
admin.site.register(Answer)
admin.site.register(HappyHour)
admin.site.register(HintModel)
admin.site.register(UserProfile)
