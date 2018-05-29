from django.db import models
from .utils.image_path import (
    restaurant_background_img_path,
    restaurant_logo_img_path,
    menu_thumb_img_path
)
__all__ = (
    'Restaurant',
    'Table',
    'Menu',
    'OrderTransaction',
    'Order',
    'Tag'
)
class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    background_image = models.ImageField(upload_to=restaurant_background_img_path)
    logo_image = models.ImageField(upload_to=restaurant_logo_img_path)
    tags = models.ManyToManyField(
        'Tag',
        related_name='tagged_restaurants',
        blank=True
    )

    def __str__(self):
        return self.name

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

    class Meta:
        unique_together = ('restaurant', 'table_number')

    def __str__(self):
        return f'{self.restaurant}의 {self.table_number}번 테이블'

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
    price = models.PositiveIntegerField()
    thumbnail_image = models.ImageField(upload_to=menu_thumb_img_path)
    type = models.CharField(choices=MENU_TYPE_CHOICES, max_length=5)

    def __str__(self):
        return self.name

class OrderTransaction(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    table = models.ForeignKey('table', on_delete=models.CASCADE)
    menu = models.ForeignKey('menu', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    table = models.ForeignKey('table', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name