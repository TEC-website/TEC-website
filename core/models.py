from django.db import models

# Create your models here.
class Resource(models.Model):
    title = models.CharField(max_length=150)
    # thumbnail = models.ImageField(upload_to="snippet", default="/assets/tube-prev.png")
    thumbnail = description = models.CharField(max_length=300, default='static/assets/Frameblog2.png')
    url = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=20, default='Video')

class Event(models.Model):
    name = models.CharField(max_length=150)
    event_date = models.DateField()
    description = models.TextField(blank=True)
