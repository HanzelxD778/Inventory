import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.API_URL}/products/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    const products = this.http.get<any[]>(this.apiUrl)
    return products;
  }

  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto)
    .subscribe(data => {
      console.log('created', data);
    })
  }

  update(id: number, dto: UpdateProductDTO) {
    console.log("Te notifico que entre update del servicio mi id es: ", id);
    console.log("Le intente enviar product: ", dto);
    return this.http.put<Product>(`${this.apiUrl}${id}`, dto)
    .subscribe(data => {
      console.log('updated', data);
    });
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
