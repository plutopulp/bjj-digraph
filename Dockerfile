FROM python:3.6

ENV PYTHONUNBUFFERED=1

RUN python -m pip install --upgrade pip

WORKDIR /code

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .
