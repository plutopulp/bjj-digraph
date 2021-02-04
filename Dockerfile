FROM python:3

# Make sure logs are received in a timely manner
ENV PYTHONBUFFERED 1

# Install system packages
RUN apt-get update && apt-get upgrade -y

# Set working directory
RUN mkdir /backend
WORKDIR /backend

COPY requirements.txt /backend/

# Make it accessible for the nginx container
EXPOSE 8000
RUN pip install -r requirements.txt
COPY . /backend/
RUN python manage.py makemigrations
RUN python manage.py migrate