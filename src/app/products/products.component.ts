import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '../products-http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any = [];
  productForm: any = {};

  constructor(private ProductsHttp: ProductsHttpService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.ProductsHttp.getProducts().subscribe(response =>
    this.productList = response);
  }

  createProd(formData: any) {
    this.ProductsHttp.createProduct(formData).subscribe(product =>
      this.productList.push(product));
  }

  deleteProduct(id : any) {
    this.ProductsHttp.delete(id).subscribe(() => {this.listProducts()});
  }
}
