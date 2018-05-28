from django.db import models
from .utils.image_path import (
    restaurant_background_img_path,
    restaurant_logo_img_path,
    menu_thumb_img_path
)

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    background_image = models.ImageField(upload_to=restaurant_background_img_path)
    logo_image = models.ImageField(upload_to=restaurant_logo_img_path)
    tags = models.ManyToManyField(
        'Tag',
        related_name='tagged_restaurants'
    )

class Table(models.Model):
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE)
    table_number = models.PositiveSmallIntegerField()
    number_of_seats = models.PositiveSmallIntegerField()
    ordered_menus = models.ManyToManyField(
        'Menu',
        related_name='ordering_tables',
        blank=True,
        through='OrderTransaction',
        through_fields=('table', 'menu')
    )

class Menu(models.Model):
    MAIN = 'MAIN'
    SIDES = 'SIDES'
    BEVERAGES = 'BVGS'
    ETC = 'ETC'
    MENU_TYPE_CHOICES = (
        (MAIN, 'Main'),
        (SIDES, 'Sides'),
        (BEVERAGES, 'Bevarages'),
        (ETC, 'Etc')
    )
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    price = models.PositiveSmallIntegerField()
    thumbnail_image = models.ImageField(upload_to=menu_thumb_img_path)
    type = models.CharField(choices=MENU_TYPE_CHOICES, max_length=5)

class OrderTransaction(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    table = models.ForeignKey('table', on_delete=models.CASCADE)
    menu = models.ForeignKey('menu', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)

class Tag(models.Model):
    name = models.CharField(max_length=50)