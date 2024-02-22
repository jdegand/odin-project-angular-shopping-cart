import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Product from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  #BASE_URL = "https://api.escuelajs.co/api/v1/";

  getProducts() {
    return this.http.get<Product[]>(this.#BASE_URL + "products?offset=0&limit=12");
  }

  getProductById(id: number) {
    return this.http.get<Product>(this.#BASE_URL + `products/${id}`);
  }
}
