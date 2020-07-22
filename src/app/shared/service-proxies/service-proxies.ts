import { Slide } from './../model/slide';
import { category } from './../model/category';
import { City } from './../model/city';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceProxies {

  headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  baseUrl = "category/"
  constructor(private http: HttpClient) { }

  getAll(): Observable<category[]> {
    let url = this.baseUrl + "GetAll";
    return this.http.get<category[]>(url, { headers: this.headers });
  }

  getCategoryShowHome(): Observable<category[]> {
    let url = this.baseUrl + "GetCategoryShowHome";
    return this.http.get<category[]>(url, { headers: this.headers });
  }
}

@Injectable({
  providedIn: 'root',
})
export class SlideServiceProxies {
  headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Slide[]> {
    let url = "slide/GetAll";
    return this.http.get<Slide[]>(url, { headers: this.headers });
  }
}
