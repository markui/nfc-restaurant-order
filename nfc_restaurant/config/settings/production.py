from .base import *

config_secret_production = json.loads(open(CONFIG_SECRET_PROD_FILE).read())

# Database
DATABASES = config_secret_production['django']['databases']


# Allowed Hosts
ALLOWED_HOSTS = [

]


# Installed Apps
INSTALLED_APPS += [
    'django_extensions'
]

DEBUG = False