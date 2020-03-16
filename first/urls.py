from django.urls import path

from . import views

# app_name = 'articles'
urlpatterns = [
	path('home', views.index, name = 'index'),
	path('', views.home, name = 'home')
]
