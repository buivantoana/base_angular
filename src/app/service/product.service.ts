import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api =
    'https://courageous-taiyaki-0f7607.netlify.app/.netlify/functions/api/product';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get<any>(`${this.api}?page=0&size=10`);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
  addProduct(product: any) {
    return this.http.post(`${this.api}`, product);
  }
  updateProduct(product: any) {
    return this.http.put(`${this.api}/${product.id}`, product);
  }
}
