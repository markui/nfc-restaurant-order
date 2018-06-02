from rest_framework import serializers
from restaurants.models import Restaurant, Menu

class RestaurantSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    class Meta:
        model = Restaurant
        fields = (
            'id',
            'name',
            'description',
            'background_image',
            'logo_image',
            'tags'
        )

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = (
            'id',
            'name',
            'description',
            'price',
            'thumbnail_image',
            'type'
        )