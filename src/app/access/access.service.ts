import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json",
    'Access-Control-Allow-Origin': "*"
  })
}
@Injectable({
  providedIn: 'root'
})
export class AccessService {

  url = environment.apiURL + '/Access/';  

  constructor(private http: HttpClient) { }  

  Login(email: string, password: string) {
    return this.http.post(this.url + 'Login/' + email + '/' + password , httpOptions);  
  }  

  ResetPassword(email) {
    // console.log(email);
    return this.http.post(this.url + 'Reset/', email, httpOptions);  
  }  
}