from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response

from .models import Restaurant
from .serializers import RestaurantSerializer
from rest_framework.decorators import api_view


@api_view(['GET'])
def RestaurantDetailRetrieveView(request, pk):
    """
    특정 pk의 Restaurant 정보 가져오기
    :param request:
    :param pk:
    :return:
    """
    try:
        restaurant = Restaurant.objects.get(pk=pk)
    except Restaurant.DoesNotExist:
        return HttpResponse(status=404)

    serializer = RestaurantSerializer(restaurant)
    return Response(serializer.data)




def RestaurantMenuListRetrieveView(request, pk):
    return HttpResponse(f'Menu Informations of Restaurant {pk}')

def OrderCreateView(request):
    return HttpResponse(f'Created Order')