# Generated by Django 4.0.5 on 2022-06-14 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0004_alter_user_profileimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profileImage',
            field=models.CharField(max_length=300),
        ),
    ]
