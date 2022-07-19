from django.conf.urls import url
from softwareData import views


urlpatterns = [
    url(r'^userdetail$',views.userDetailsApi),
    url(r'^userdetail/([0-9]+)$', views.userDetailsApi),

    url(r'^users$',views.UsersApi),
    url(r'^users/([0-9]+)$',views.UsersApi)
]