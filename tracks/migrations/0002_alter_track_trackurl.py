# Generated by Django 4.0.5 on 2022-06-17 10:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='track',
            name='trackUrl',
            field=models.CharField(default=None, max_length=500),
        ),
    ]
