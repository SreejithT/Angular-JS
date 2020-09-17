import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("http://localhost:4200/assets/products.json")
  }
}
