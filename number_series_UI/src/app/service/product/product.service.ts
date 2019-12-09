import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serverURL = 'http://192.168.8.243:8000/'

  constructor(private http: HttpClient) { }

  newProduct(product) {
    let url = this.serverURL + 'product/list';
    return this.http.post(url, product);
  }

  getProducts() {
    let url = this.serverURL + 'product/list';
    return this.http.get(url);
  }

  getDetails(id) {
    let url = this.serverURL + 'product/type';
    return this.http.get(url);
  }

}
