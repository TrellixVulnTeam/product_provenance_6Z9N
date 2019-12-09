from django.urls import path

from products import views

urlpatterns = [
    path('list', views.product_list, name='create'),
    path('details/<int:id>', views.product_rud, name='details'),
    path('type', views.product_type_list, name='create'),
    path('prod_details/<int:id>', views.product_type_rud, name='create'),
    path('package', views.package_type_list, name='create'),
    path('batch', views.product_batch, name='create'),
]
