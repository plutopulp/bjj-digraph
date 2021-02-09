FROM python:3.6

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

ADD ./server/requirements.txt /app/server/

RUN python -m pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r server/requirements.txt

ADD ./docker /app/docker
ADD ./server /app/server
