# Generated by Django 3.0.3 on 2020-03-12 17:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20200312_2236'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hintmodel',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.UserProfile'),
        ),
        migrations.AlterUniqueTogether(
            name='hintmodel',
            unique_together={('ques', 'user')},
        ),
    ]
