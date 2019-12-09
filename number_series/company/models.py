from django.db import models

# Create your models here.
"""
Model for company registration
"""
class Company(models.Model):
    # id = models.AutoField(auto_created=True, primary_key=True)
    name = models.CharField(max_length=100)
    phone = models.IntegerField()
    email = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    def __str__(self):
        return "Company: {}".format(self.name)

    class Meta:
        db_table = 'companies'