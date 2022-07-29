import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  apiUrl : string = 'http://localhost:3000/products';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private _http: HttpClient) { }

  getProducts(){
    return this._http.get(`${this.apiUrl}`);
  }
}
