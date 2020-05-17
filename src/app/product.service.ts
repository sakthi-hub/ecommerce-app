import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:5000/api/';

  constructor(private http: HttpClient, private router: Router) { }

  addProduct(addProduct) {
    const obj = {
      name: addProduct.name,
      price:addProduct.price,
      description: addProduct.description,
      color:addProduct.color,
      size:addProduct.size
      
    };
    return this.http.post(`${this.uri}addProduct`, obj)
    .subscribe(res => console.log('Done'));
  }
  
  updateProduct(updateProduct) {
    const obj = {
      id: updateProduct.id,
      name: updateProduct.name,
      price:updateProduct.price,
      description: updateProduct.description,
      color:updateProduct.color,
      size:updateProduct.size
      
    };
    return this.http.post(`${this.uri}updateProduct`, obj)
    .subscribe(res => console.log('Done'));
  }

  productList() {
    return this
           .http
           .get(`${this.uri}productList`);
  }

  deleteProduct(id) {
    const obj = {
      id: id
    };
    return this.http.post(`${this.uri}deleteProduct`, obj)
    .subscribe(res => alert("deleted sucessfully"));
  }

  viewProduct(id) {
    const obj = {
      id: id
    };
    return this.http.post(`${this.uri}viewProduct`, obj);
  }

}
