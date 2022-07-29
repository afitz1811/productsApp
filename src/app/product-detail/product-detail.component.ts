import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsHttpService } from '../products-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsHttpService) { }

  sub: any;
  id: any;
  product: any
  editing: boolean = false;
  productForm: any;

  ngOnInit(): void {
    this.sub = this._activatedRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this._productService.getProduct(this.id).subscribe(response => {
          this.product = response
        });
      }
    )

  }

  saveProduct(productForm: any) {
    console.log(productForm);
    this._productService.update(productForm).subscribe();
    this._router.navigate(['products']);
  }

}
