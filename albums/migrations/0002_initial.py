# Generated by Django 4.0.5 on 2022-06-10 18:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tracks', '0001_initial'),
        ('albums', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='tracks',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='albums_tracks', to='tracks.track'),
        ),
    ]
