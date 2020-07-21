import { City } from './../model/city';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceProxies {

  private _urlAddress = "https://jsonplaceholder.typicode.com/todos1/1";

  constructor(private http: HttpClient) { }

  getAllCity(): Observable<City[]> {
    return this.http.get<City[]>(this._urlAddress);
  }
}
