# Generated by Django 3.1.2 on 2020-10-21 04:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_remove_todo_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]
