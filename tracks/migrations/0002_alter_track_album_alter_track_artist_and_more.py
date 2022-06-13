# Generated by Django 4.0.5 on 2022-06-11 19:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0001_initial'),
        ('albums', '0002_initial'),
        ('tracks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='track',
            name='album',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='albums.album'),
        ),
        migrations.AlterField(
            model_name='track',
            name='artist',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='artists.artist'),
        ),
        migrations.AlterField(
            model_name='track',
            name='duration',
            field=models.PositiveIntegerField(blank=True, default=None),
        ),
    ]
