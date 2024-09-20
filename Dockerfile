FROM python:3.10-slim
RUN apt update && apt-get install -y cron

WORKDIR /app


COPY . /app


RUN pip install --no-cache-dir -r requirements.txt

# Run migrations and collect static files
RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py fetch_youtube_videos
RUN python manage.py crontab add
RUN service cron start
RUN python manage.py collectstatic --noinput

# Expose port 8000
EXPOSE 8000

# Start the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000", "--insecure"]