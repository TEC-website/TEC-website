#!/bin/bash
set -e

echo "========================================="
echo "Starting TEC Website Application"
echo "========================================="

echo ""
echo "Running database migrations..."
python manage.py makemigrations --noinput
python manage.py migrate --noinput

echo ""
echo "Collecting static files..."
python manage.py collectstatic --noinput

echo ""
echo "Fetching initial YouTube videos..."
python manage.py fetch_youtube_videos || echo "Warning: Failed to fetch videos (will retry via cron)"

echo ""
echo "Setting up cron jobs..."
python manage.py crontab add

echo ""
echo "Starting cron service..."
service cron start

echo ""
echo "Active cron jobs:"
python manage.py crontab show

echo ""
echo "Cron service status:"
service cron status

echo ""
echo "========================================="
echo "Starting Django development server..."
echo "========================================="
exec python manage.py runserver 0.0.0.0:8000 --insecure

