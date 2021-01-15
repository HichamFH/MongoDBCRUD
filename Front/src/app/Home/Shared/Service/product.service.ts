import { Product } from './../Model/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  URI = "https://localhost:44307/api/Products";

  /**
   *    Get All Product
   */
  getAll() : Observable<Product[]>{
    return this.http.get<Product[]>(this.URI)
  }

  /**
   *  Post Function => Create New Product
   */

   create(product : Product) {
     return this.http.post(this.URI , product);
   }

   /**
    *
    *   Delete Product
    * https://localhost:44307/api/Products/5ff7a0fa472ad9fa2f217cff
    */

    delete(id) {
      return this.http.delete(this.URI + "/"+id);
    }

    /**
     *
     *  Update Product
     *
     */

     put(id ,product) {
        return this.http.put(this.URI + "/"+id , product);
     }



}
