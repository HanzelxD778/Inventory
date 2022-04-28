import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor() { }

  @Input() product: Product = {
    id: 0,
    name: '',
    cost: 0,
    price: 0,
    dateCreated: '',
    lastModified: '',
    isActive: false,
    tagList: [],
    idCategory: {
      id: 0,
      name: '',
      isActive: false,
      isErased: false,
      dateCreated: '',
      lastModified: ''
    }
  }

  @Output() updateProduct = new EventEmitter<number>();

  onUpdateProduct () {
    this.updateProduct.emit(this.product.id);
  }

}
