import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html'
  // styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  new_product = new Product();

  constructor(
    private prodService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createProduct(){
    this.new_product['company'] = 1;
    this.prodService.newProduct(this.new_product).subscribe(data=>{
      this.new_product = new Product();
      console.log(data);
      // this.router.navigate(['/products']);
    });
  }
}

export class Product{
  product_description: any;
  product_name: any;
  company: any;
}
