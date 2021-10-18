import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }

  get(appendURL) {
    const API_URL = environment.apiURL + `/Admin/Get${appendURL}`;
    return this.http.get(API_URL);
  }

  delete(appendURL, id) {
    const API_URL = environment.apiURL + `/Admin/Delete${appendURL}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(API_URL, httpOptions);
  }

  save(appendURL, id, description) {
    const API_URL = environment.apiURL + `/Admin/Save${appendURL}/${id}/${description}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(API_URL, httpOptions);
  }

  saveUserType(id, name, description) {
    const API_URL = environment.apiURL + `/Admin/SaveUserType/${id}/${name}/${description}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(API_URL, httpOptions);
  }

  getAuditTrail(obj) {
    const API_URL = environment.apiURL + `/Admin/GetAuditTrail`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(API_URL, obj, httpOptions);
  }

}
