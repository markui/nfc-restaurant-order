from django.urls import path
from . import views

app_name = 'restaurants'

urlpatterns = [
    path('<int:pk>/', views.RestaurantDetailRetrieveView, name='detail'),
]