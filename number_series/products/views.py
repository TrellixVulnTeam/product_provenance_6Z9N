from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.models import Product, Product_Type, Package_Type, Product_Batch
from products.serializers import ProductSerializer, ProductTypeSerializer, PackageTypeSerializer, ProductBatchSerializer


# Create your views here.
############# ------------ PRODUCT ------------ #############
@api_view(['GET', 'POST'])
def product_list(request):
    """
    List or create a product(s)
    """
    if request.method == 'GET':
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def product_rud(request, id=None):
    """
    Retrieve, update or delete a product
    """
    try:
        product = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        if product:
            serializer = ProductSerializer(product)
            return Response(serializer.data)
        else:
            #id = None
            product1 = Product.objects.all(id=None)
            serializer = ProductSerializer(product1, many=True)
            return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            print('&&&&&&&&&&&', serializer.data)
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

############# ------------ PRODUCT TYPE ------------ #############
@api_view(['GET', 'POST'])
def product_type_list(request):
    """
    List or create a product type(s)
    """
    if request.method == 'GET':
        type = Product_Type.objects.all()
        serializer = ProductTypeSerializer(type, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def product_type_rud(request, id=None):
    """
    Retrieve, update or delete a product type
    """
    try:
        pro_type = Product_Type.objects.get(pk=id)
    except Product_Type.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        if pro_type:
            serializer = ProductTypeSerializer(pro_type)
            return Response(serializer.data)
        else:
            #id = None
            pro_type1 = Product_Type.objects.all(id=None)
            serializer = ProductTypeSerializer(pro_type1, many=True)
            return Response(serializer.data)

############# ------------ PACKAGE TYPE ------------ #############
@api_view(['GET', 'POST'])
def package_type_list(request):
    """
    List or create a package type(s)
    """
    if request.method == 'GET':
        package = Package_Type.objects.all()
        serializer = PackageTypeSerializer(package, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PackageTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

############# ------------ PRODUCT BATCH ------------ #############
@api_view(['GET', 'POST'])
def product_batch(request):
    """
    List or create a product batch
    """
    if request.method == 'GET':
        batch = Product_Batch.objects.all()
        serializer = ProductBatchSerializer.retrieve(batch)
        return Response(serializer.data)

    elif request.method == 'POST':
        params = request.data
        if not request.POST._mutable:
            request.POST._mutable = True
        # print('check1----->',request.POST._mutable)

        serializer = ProductBatchSerializer.create(request, request.data)
        request.POST._mutable = False

        if serializer:
            # serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    # elif request.method == 'POST':
    #     # data = request.data
    #     # print('DATA', data)
    #     # quantity = request.POST.get('quantity')
    #     # print('QUANTITY', quantity)
    #     serializer = ProductBatchSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True):
    #         # serializer.save()
    #         qua = serializer.validated_data['quantity']
    #         id = serializer.validated_data['product']
    #         codes = []
    #
    #         while len(codes) <= qua:
    #             code = ('%06x' % random.randrange(16 ** 6)).upper()
    #             if code in codes:
    #                 continue
    #             else:
    #                 serializer.validated_data['product'] = code
    #                 codes += [code]
    #                 serializer.save()
    #         #     # id = serializer.validated_data['product']
    #         #     # name = Product.objects.get().
    #         #     # pr = name.product_name
    #         #     name = id
    #
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #         # quantity = request.quantity
    #         # serializer_instance = serializer.save()
    #         # quantity = serializer_instance['quantity']
    #         # print('QUANTITY', quantity)
    #     # print('DATA', request.data)
    #     # print('SRL', serializer)
    #     # if serializer.is_valid():
    #     #     serializer.save()
    #     #     return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
