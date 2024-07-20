FROM python:3.10-slim

WORKDIR /app


COPY . /app


RUN pip install --no-cache-dir -r requirements.txt

ENV DJANGO_ALLOWED_HOSTS thisexcellentchurch.org
ENV DEBUG False

# Run migrations and collect static files
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

# Expose port 8000
EXPOSE 8000

# Start the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000", "--insecure"]
