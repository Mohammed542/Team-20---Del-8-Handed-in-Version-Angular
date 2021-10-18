import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OverdueserviceService {

  url = environment.apiURL + '/Report';

  constructor(private http: HttpClient) { }

  Register(data)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(this.url + '/Register', data, httpOptions)
  }
  GetReportData(data)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.url + '/GetReportData', data, httpOptions)
  }
  GetCategories()
  {
    return this.http.get(this.url + '/GetCategories')
  }
  Login(data)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.url + '/Login', data, httpOptions)
  }

  GetOverduePayments(){
    return this.http.get(environment.apiURL + '/Landlord/OverduePayments')
  }
  EmailOverduePayment(item){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(environment.apiURL + '/Landlord/EmailOverduePayment', item, httpOptions)
  }
}
