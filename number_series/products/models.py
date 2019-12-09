from django.db import models
from company.models import Company

# Create your models here.
"""
Model for creating a product 
"""
class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_description = models.TextField(blank=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return "Product: {}".format(self.product_name)

    class Meta:
        db_table = 'products'

"""
Model for creating a product type
"""
class Product_Type(models.Model):
    product_type = models.CharField(max_length=100)

    def __str__(self):
        return "Product Type: {}".format(self.product_type)

    class Meta:
        db_table = 'product_types'

"""
Model for creating a product package type
"""
class Package_Type(models.Model):
    product_type = models.ForeignKey(Product_Type, on_delete=models.CASCADE, related_name='package_type')
    package_type = models.CharField(max_length=100)

    def __str__(self):
        return "Product: {}".format(self.package_type)

    class Meta:
        db_table = 'package_types'

"""
Model for creating a product batch
"""
class Product_Batch(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    package_type = models.ForeignKey(Package_Type, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)
    net_weight = models.CharField(max_length=100)
    price = models.IntegerField()
    vat = models.IntegerField()
    date = models.DateField()
    codes = models.TextField(null=True)

    def __str__(self):
        return "Product_Batch: {}".format(self.product_id)

    class Meta:
        db_table = 'product_batch'
