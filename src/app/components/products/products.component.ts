import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  jsonProducts: any = {};
  idProductChoosen = 0;

  constructor(
    //private http: HttpClient
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.jsonProducts = (JSON.stringify(data));
      this.jsonProducts = JSON.parse(this.jsonProducts);
      console.log(this.jsonProducts.data);
      this.products = this.jsonProducts.data;
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      categoryId: 1,
      cost: 20,
      name: 'H_Product',
      price: 25,
      tagsId: ["0" , "1"]
    }
    this.productService.create(product);
  }

  onUpdateProduct(id: number) {
    /*this.productService.getProduct(id)
    .subscribe(data => {
      this.productChoosen = data;
    });
    console.log(this.productChoosen);*/
    console.log(id);
    this.idProductChoosen = id;
    this.updateProduct();
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      name: 'Producto actualizado',
    }
    this.productService.update(this.idProductChoosen, changes);
    console.log("Te notifico que entre a updateProduct");
  }
}
