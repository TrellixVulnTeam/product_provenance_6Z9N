import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.scss']
})
export class CreateBatchComponent implements OnInit {
  id: any;
  prod_types: any;
  packages: any;

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = params['id']});
    this.fetchDetails(this.id);
  }

  fetchDetails(id) {
    this.prodService.getDetails(id).subscribe(data => {
      this.prod_types = data;
      console.log(data);
    });
  }

  passPkg(list) {
    console.log(list);
    this.packages = list;
  }
}
