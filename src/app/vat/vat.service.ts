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


export class VatService {

  url = environment.apiURL + '/VAT/';  

  constructor(private http: HttpClient) { }  

  GetVATPercentages(){
    return this.http.get(this.url + 'GetVATPercentages');
  }

  CreateVATPercentage(percentage: number) {
    console.log("create here " + percentage);

    var utid = sessionStorage['UserTypeID'];
    if(utid == 4){
      var adminid = sessionStorage['AdminID'];
    }

    return this.http.get(this.url + 'CreateVATPercentage/' + percentage + "/" + adminid, httpOptions);
  }  

  Edit(id: number, percentage: number) {
    console.log("update here " + id, percentage);

    var utid = sessionStorage['UserTypeID'];
    if(utid == 4){
      var adminid = sessionStorage['AdminID'];
    }

    return this.http.post(`${this.url}/EditVATPercentage/${id}/${percentage}/${adminid}`, httpOptions); 
  }  

  DeleteVATPercentage(id: number) {
    console.log("delete here " + id);

    var utid = sessionStorage['UserTypeID'];
    if(utid == 4){
      var adminid = sessionStorage['AdminID'];
    }

    return this.http.delete(this.url + 'DeleteVATPercentage/' + id + "/" + adminid, httpOptions);  
  }  

}
