import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Package } from '.././models/package.model';  

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 private apiUrl = 'http://localhost:5018/api/Home';  

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.apiUrl);
  }
}
