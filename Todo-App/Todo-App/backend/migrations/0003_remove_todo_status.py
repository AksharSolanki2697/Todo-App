# Generated by Django 3.1.2 on 2020-10-21 04:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20201021_0338'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='status',
        ),
    ]