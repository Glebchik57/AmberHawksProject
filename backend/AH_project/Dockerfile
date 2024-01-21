FROM python:3.11-slim AS builder

COPY pyproject.toml .
COPY poetry.lock .

RUN python -m pip install --no-cache-dir poetry==1.6.1
RUN poetry export --without dev -f requirements.txt -o requirements.txt

FROM python:3.11-slim

WORKDIR /app

COPY --from=builder requirements.txt ./

RUN python -m pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["gunicorn", "AH_project.wsgi:application", "--bind", "0:8000" ]
