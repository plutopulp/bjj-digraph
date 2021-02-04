from .base import *

DEBUG = False

ALLOWED_HOSTS = ["http://localhost:3000", "bjj-paths.com"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.getenv("DB_NAME"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASS"),
        "HOST": os.getenv("DB_HOST"),
        "PORT": os.getenv("DB_PORT"),
    }
}

CORS_ORIGIN_WHITELIST = ["http://localhost:3000"]

# Will uncomment these after initial deployment

#SECURE_SSL_REDIRECT = True
#
#SESSION_COOKIE_SECURE = True
#
#CSRF_COOKIE_SECURE = True
#
#SECURE_BROWSER_XSS_FILTER = True