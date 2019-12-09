from rest_framework import serializers
import random

from products.models import Product, Product_Batch, Product_Type, Package_Type


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'product_name', 'product_description', 'company']

class PackageTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package_Type
        fields = ['id', 'package_type', 'product_type']

class ProductTypeSerializer(serializers.ModelSerializer):
    package_type = PackageTypeSerializer(read_only=True, many=True)

    class Meta:
        model = Product_Type
        fields = ['id', 'product_type', 'package_type']

class ProductBatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_Batch
        fields = ['id', 'product', 'package_type', 'quantity', 'net_weight', 'date', 'price', 'vat', 'codes']

    def retrieve(self):
        serializer = ProductBatchSerializer(self, many=True)
        return serializer

    def create(self, validated_data):
        # data = self.get_initial()
        qty = int(validated_data['quantity'])

        print(validated_data)
        codes = []
        for i in range(1, qty+1):
            code = ('%06x' % random.randrange(16 ** 6)).upper()
            if code in codes:
                continue
            else:
                codes += [code]
        #return codes

        # qty = validated_data.pop('quantity')
        # print("Validated --> ", qty)
        # codes = []
        #
        # while len(codes) <= qty:
        #     code = ('%06x' % random.randrange(16 ** 6)).upper()
        #     if code in codes:
        #         continue
        #     else:
        #         codes += [code]
        # return code
        # validated_data['codes'] = codes

        product_id = int(validated_data['product'])
        package_type_id = int(validated_data['package_type'])
        # validated_data.pop('product')
        # validated_data.pop('package_type')
        product = Product.objects.get(id=product_id)
        package_type = Package_Type.objects.get(id=package_type_id)

        quantity = validated_data['quantity']
        net_weight = validated_data['net_weight']
        price = validated_data['price']
        vat = validated_data['vat']
        date = validated_data['date']

        batch = Product_Batch.objects.create(
            codes=codes,
            product=product,
            package_type=package_type,
            quantity=quantity,
            net_weight=net_weight,
            price=price,
            vat=vat,
            date=date
        )
        # batch.save()
        print(batch)
        return batch


