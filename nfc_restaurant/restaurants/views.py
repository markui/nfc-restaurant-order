from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Restaurant
from .serializers import RestaurantSerializer, MenuSerializer
from rest_framework.decorators import api_view
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage


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

@api_view(['GET'])
def RestaurantMenuListRetrieveView(request, pk):
    """
    특정 pk의 Restaruant의 Menu List 정보 가져오기
    :param request:
    :param pk:
    :return:
    """
    try:
        restaurant = Restaurant.objects.get(pk=pk)
    except Restaurant.DoesNotExist:
        return HttpResponse(status=404)
    menu_type = request.GET.get('type', 'MAIN')
    menus = restaurant.menu_set.filter(type=menu_type)
    paginator = Paginator(menus, 3)
    page = request.GET.get('page', '1')


    try:
        paged_menus = paginator.page(page)
    except PageNotAnInteger:
        paged_menus = paginator.page(1)
    except EmptyPage:
        paged_menus = paginator.page(paginator.num_pages)

    serializer = MenuSerializer(paged_menus, many=True)
    return Response(serializer.data)

# class RestaurantMenuListRetrieveView(generics.ListAPIView):
#     pass
#


def OrderCreateView(request):
    return HttpResponse(f'Created Order')