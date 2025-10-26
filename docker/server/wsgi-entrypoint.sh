#!/bin/sh

until cd /app/server
do
    echo "Waiting for server volume..."
done

until ./manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 2
done

# Ensure Settings singleton exists to trigger default data via signals
echo "from settings.models import Settings; s=Settings.load(); s.save()" | ./manage.py shell

./manage.py collectstatic --noinput

echo "from django.contrib.auth import get_user_model; get_user_model().objects.create_superuser('admin', 'admin@example.com', 'pass')" | ./manage.py shell


gunicorn main.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4

#####################################################################################
# Options to DEBUG Django server
# Optional commands to replace abouve gunicorn command

# Option 1:
# run gunicorn with debug log level
# gunicorn server.wsgi --bind 0.0.0.0:8000 --workers 1 --threads 1 --log-level debug

# Option 2:
# run development server
# DEBUG=True ./manage.py runserver 0.0.0.0:8000