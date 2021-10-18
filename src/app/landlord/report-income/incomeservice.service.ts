import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncomeserviceService {

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

  GetPieChartData(){
    return this.http.get(environment.apiURL + '/Landlord/GetPieChartData');
  }

  GetUnitsOccupied(){
    return this.http.get(environment.apiURL + '/Landlord/GetUnitsOccupied');
  }

  GetIncomeExpensesData(){
    return this.http.get(environment.apiURL + '/Landlord/GetIncomeExpensesData');
  }
}
