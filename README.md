# Amber Hawks site
## Описание
Проект разработан для Калининградской федерации американского футбола.
Сайт позваляет:
- размещать информацию о командах состоящих в федерации;
- публиковать информацию о предстоящих событиях, играх и новостях;
- публиковать актуальные составы команд;
- публиковать актуальные документы;
- размещать расписание тренировко;
- оставлять заявки на запись на тренировку с автоматическим уведомлением администратора сайта.

Так же проект позволяет размещать новости из группы в VK на сайте в автоматическом режиме.
## Стек технологий
- Next.js
- Python 3.11
- Django 3.2
- djangorestframework 3.13
- PostgreSQL
- Docker
- Docker-compose
- Nginx
## Запуск проекта
Установить Docker на свой сервер:
```
sudo apt update
sudo apt install curl
curl -fSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh
sudo apt-get install docker-compose-plugin
```
Создать файл *docker-compose.production.yml* и скопировать содержимое *docker-compose.production.yml* из репозитория:
```
sudo touch docker-compose.production.yml
```
Создать файл *.env* в директории с файлом *docker-compose.production.yml* :
```
sudo touch .env
```
В файле .env необходимо прописать следующие переменные:
```
SECRET_KEY - Секретный ключ проекта
TG_TOKEN - Токен телеграм бота
TG_ID - Телеграм ID администратора, куда будут приходить уведомления
VK_TOKEN - Сервесный токен VK
VK_VERSION - Версия VK
GROUP_DOMAIN - Домен группы VK от куда будут парситься новости
POSTGRES_USER - Пользователь БД
POSTGRES_PASSWORD - Пароль БД
POSTGRES_DB - Название БД
DB_HOST - Хост БД
DB_PORT - БД порт
```
Откоректировать конфиг nginx на сервере для передачи запросов в:
```
sudo nano /etc/nginx/sites-enabled/default
```
Должно быть так:
```
server {
    server_name ваш домен;
    client_max_body_size 100M;

    location / {
        proxy_pass http://amfoot39.ru:8000;
    }
```
Запустить *docker-compose.production.yml*  в режиме демона:
```
sudo docker compose -f docker-compose.production.yml up -d
```
Выполнить миграции и  соберать статику:
```
sudo docker compose -f docker-compose.production.yml exec backend python manage.py migrate
sudo docker compose -f docker-compose.production.yml exec backend python manage.py collectstatic
```
## Авторы
- Frontend - [ElizavetaBiryukova](https://github.com/ElizavetaBiryukova)
- Backend - [Jaroslav2001](https://github.com/Jaroslav2001), [Sevostyanov Gleb](https://github.com/Glebchik57)

**Содержание**

[TOC]

