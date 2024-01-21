import time
import requests

ENDPOINT_AH = 'http://127.0.0.1:8000/api/news/parcer/'
RETRY_PERIOD = 10


def main():
    try:
        requests.get(ENDPOINT_AH)
    except Exception as error:
        return f'сбой работы программы. Причина: {error}'
    finally:
        time.sleep(RETRY_PERIOD)


if __name__ == '__main__':
    main()
