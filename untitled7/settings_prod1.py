DEBUG = False
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db1',
        'USER': 'ad',
        'PASSWORD': '123',
        'HOST': 'localhost',
        'PORT': '',
    }
}