import os

import requests
from dotenv import load_dotenv

from .models import News

load_dotenv()

VK_TOKEN = os.getenv('TOKEN')
VK_VERSION = 5.154
GROUP_DOMAIN = 'big_fat_dird'


def get_post():
    posts = requests.get(
        'https://api.vk.com/method/wall.get',
        params={
            'access_token': VK_TOKEN,
            'v': VK_VERSION,
            'domain': GROUP_DOMAIN,
            'count': 1
            }
        )
    data = posts.json()['response']['items']
    return data


news = get_post()


def create_news(news):
    text = news[0]['text']
    image = news[0]['attachments'][0]['photo']['sizes'][8]['url']
    title = f'{" ".join(text.split()[0:3])}...'
    #return f'{title} {text}'
    News.objects.create(title=title, text=text, image=image)


last_news = create_news(news)
