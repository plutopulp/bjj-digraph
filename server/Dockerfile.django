FROM python:3.6

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV HOME=/home/app
ENV APP_HOME=/home/app/server
WORKDIR $APP_HOME


RUN mkdir -p $APP_HOME
RUN mkdir -p $APP_HOME/staticfiles

RUN python -m pip install --upgrade pip

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .
