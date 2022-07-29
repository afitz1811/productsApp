import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '../products-http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any = [];

  constructor(private ProductsHttp: ProductsHttpService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.ProductsHttp.getProducts().subscribe(response =>
    this.productList = response);
  }

}
