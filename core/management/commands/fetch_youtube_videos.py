import feedparser
from django.core.management.base import BaseCommand
from django.utils.dateparse import parse_datetime
from core.models import Resource


class Command(BaseCommand):
    help = "Fetches latest videos from TEC's channel RSS feed"

    def handle(self, *args, **options):
        feed_url = f"https://www.youtube.com/feeds/videos.xml?channel_id=UC8rO2XrlhZfL4s7O4RUDUBQ"

        feed = feedparser.parse(feed_url)

        for entry in feed.entries:
            video_id = entry.yt_videoid
            title = entry.title
            published_at = parse_datetime(entry.published)

            # Check if video already exists in database
            video, created = Resource.objects.get_or_create(
                video_id=video_id,
                defaults={
                    "title": title,
                    "thumbnail": f"https://img.youtube.com/vi/{video_id}/mqdefault.jpg",
                    "url": f"https://www.youtube.com/watch?v={video_id}",
                    "description": "",
                    "published_at": published_at,
                },
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f"Added new video: {title}"))
            else:
                self.stdout.write(f"Video already exists: {title}")
