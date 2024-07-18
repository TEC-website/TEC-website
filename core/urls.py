from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('resource/', views.resource, name='resource'),
    path('roadmap/', views.roadmap, name='roadmap'),
    path('contacts/', views.contacts, name='contacts'),
    path('reqcontent/', views.reqcontent, name='content'),
    path('search/', views.search, name='search'),
    path('give/', views.give, name='give'),
    path('creeds/', views.creeds, name='creeds')
]