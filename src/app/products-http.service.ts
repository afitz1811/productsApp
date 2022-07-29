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

  getProduct(id: any) {
    let product = this._http.get(`${this.apiUrl}/${id}`)
    return product
  }

  createProduct(formData: any) : Observable<any>{
    return this._http.post(this.apiUrl, formData)
    .pipe(catchError(this.handleError));
  }

  delete(id : any): Observable<any>{
    let API_URL = `${this.apiUrl}/${id}`
    return this._http.delete(API_URL)
    .pipe(catchError(this.handleError))
  }

  update(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/${data.id}`;
    return this._http.put(API_URL, data).pipe(
      catchError(this.handleError)
    )
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => error)
  };

}
