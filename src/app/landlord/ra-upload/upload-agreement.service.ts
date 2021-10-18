import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Buildings } from './buildings.model';
import { Tenant } from './tenant.model';

@Injectable({
  providedIn: 'root'
})
export class UploadAgreementService {
  
  formData: Tenant;
  rentals = [];
  tenants = [];

  constructor(private http: HttpClient) { }

  
  saveTenant() {
    var body = {
      ...this.formData,
      RentalAgreements: this.rentals
    };
    console.log(body)
    return this.http.post(environment.apiURL + '/Tenants', body);
  }

  getBuildingList(){
    return this.http.get(environment.apiURL+'/Buildings').toPromise();
  }

  getUnitList(id){
    return this.http.get(environment.apiURL+'/Units/getUnit/' + id).toPromise();
  }

  getBuildingDetails(id){
    return this.http.get<Buildings[]>(environment.apiURL+'/Buildings/' + id);
  }

  // getUnitList(id){
  //   return this.http.get<any>("https://localhost:44369/api/Units/"+id);
  // }
  

  // saveTenant(obj: Tenant){
  //   return this.http.post(environment.apiURL+'/Tenants', obj)
  // }
}
