# Generated by Django 3.0.3 on 2020-03-09 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_remove_submission_user_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hintmodel',
            name='hintviewed',
            field=models.BooleanField(default=True),
        ),
    ]
