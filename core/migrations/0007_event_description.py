# Generated by Django 5.0.3 on 2024-03-24 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0006_event_alter_resource_thumbnail"),
    ]

    operations = [
        migrations.AddField(
            model_name="event", name="description", field=models.TextField(blank=True),
        ),
    ]
