FROM python:3.11-slim

WORKDIR /app

COPY pyproject.toml .
COPY poetry.lock .

RUN python -m pip install --no-cache-dir poetry==1.6.1
RUN poetry config virtualenvs.create false
RUN poetry install

COPY . .

WORKDIR /app/contact_form

ARG TG_TOKEN
ARG TG_ID

WORKDIR /app

CMD ["python", "manage.py", "runserver", "0:8000"]
