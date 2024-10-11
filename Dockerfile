FROM python:3.10-slim
RUN apt update && apt-get install -y cron && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt && \
    python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py fetch_youtube_videos && \
    python manage.py crontab add && \
    service cron start && \
    python manage.py collectstatic --noinput

# Expose port 8000
EXPOSE 8000

# Start the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000", "--insecure"]