from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from company.models import Company
from company.serializers import CompanySerializer
from django.views.generic import TemplateView

# Create your views here.
# def index(request):
#     return render(request, 'index.html', context=None)

class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

@api_view(['GET', 'POST'])
def company_list(request):
    """
    List all companies or create a new company
    """
    if request.method == 'GET':
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            print('$$$$$$$')
            serializer.save()
            print('$$$$$$$$$$', serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

