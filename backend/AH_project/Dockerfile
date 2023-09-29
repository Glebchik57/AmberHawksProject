FROM python:3.11-slim AS builder

WORKDIR /app

COPY pyproject.toml .
COPY poetry.lock .

RUN python -m pip install --no-cache-dir poetry==1.6.1
RUN poetry config virtualenvs.create false
RUN poetry install

FROM python:3.11-slim

WORKDIR /app

COPY . .

CMD ["python", "manage.py", "runserver", "0:8000"]
