"""
WSGI config for tec_site project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application


environment = os.getenv("ENVIRONMENT", "development")

os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'tec_site.settings.{environment}')

application = get_wsgi_application()
