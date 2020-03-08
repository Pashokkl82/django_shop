from django.urls import path

from . import views

urlpatterns = [
	# path('', views.index, name = 'index')
path('', views.basket_adding, name = 'basket_adding'),
path('/checkout', views.checkout, name = 'checkout')
]
