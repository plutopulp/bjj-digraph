from .base import *

DEBUG = True

ALLOWED_HOSTS = ["127.0.0.1", "localhost", "0.0.0.0", "68.183.6.51"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.getenv("DB_NAME"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASS"),
        "HOST": os.getenv("DB_HOST"),
        "PORT": os.getenv("DB_PORT")
    }
}

CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
