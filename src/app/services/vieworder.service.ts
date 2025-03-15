import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OrderItem } from '../model/orders.type';

@Injectable({
  providedIn: 'root'
})
export class VieworderService {

  http = inject(HttpClient)
    getOrdersApi() {
      const url = `http://localhost:4000/vieworders`
      return this.http.get<Array<OrderItem>>(url)
    }
}
