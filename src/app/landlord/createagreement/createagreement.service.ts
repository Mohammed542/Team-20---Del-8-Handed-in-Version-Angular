import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Buildings } from './buildings.model';
import { CreateagreementComponent } from './createagreement.component';
import { Createagreement } from './createagreement.model';
import { Tenant } from './tenant.model';
import { Observable, of } from 'rxjs';
import { Units } from './units.model';

@Injectable({
  providedIn: 'root'
})
export class CreateagreementService {
  formData: Tenant;
  rentals = [];
  tenants = [];

  constructor(private http: HttpClient) {}

  saveTenant() {
    var body = {
      ...this.formData,
      RentalAgreements: this.rentals
    };
    console.log(body);
    return this.http.post(environment.apiURL + '/Tenants', body);
  }

  getBuildingList() {
    return this.http.get(environment.apiURL + '/Buildings').toPromise();
  }

  getUnitList(id) {
    return this.http
      .get(environment.apiURL + '/Units/getUnit/' + id)
      .toPromise();
  }

  saveCommercialMaintenanceAgreement(data: any): Observable<any> {
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
    }
    var body = {
      BuildingID: data.BuildingID,
      CompanyName: data.CompanyName,
      RegistrationNumber: data.RegistrationNumber,
      VatNumber: data.VatNumber,
      TradeActivitiesDescription: data.TradeActivitiesDescription,
      FirstName: data.FirstName,
      Surname: data.Surname,
      CellPhoneNumber: data.CellPhoneNumber,
      EmailAddress: data.EmailAddress,
      IDNumber: data.IDNumber,
      UnitID: data.UnitID,
      StartDate: `${data.StartDate.year}/${data.StartDate.month}/${data.StartDate.day}`,
      EndDate: `${data.EndDate.year}/${data.EndDate.month}/${data.EndDate.day}`,
      DepositAmount: data.DepositAmount
    };
    return this.http.post<any>(
      `${environment.apiURL}/SaveCommercialMaintenanceAgreement/` + landlid,
      body
    );
  }

  saveResidentialMaintenanceAgreement(data: any): Observable<any> {
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
    }
    var body = {
      BuildingID: data.BuildingID,
      FirstName: data.FirstName,
      Surname: data.Surname,
      CellPhoneNumber: data.CellPhoneNumber,
      EmailAddress: data.EmailAddress,
      IDNumber: data.IDNumber,
      UnitID: data.UnitID,
      StartDate: `${data.StartDate.year}/${data.StartDate.month}/${data.StartDate.day}`,
      EndDate: `${data.EndDate.year}/${data.EndDate.month}/${data.EndDate.day}`,
      DepositAmount: data.DepositAmount
    };
    return this.http.post<any>(
      `${environment.apiURL}/SaveResidentialMaintenanceAgreement/` + landlid,
      body
    );
  }

  // getListOfUnits(id): Observable<Units[]> {
  //   let params = new HttpParams();
  //   // params = params.append('BuildingId', id);
  //   // return this.http.get<Units[]>(`${environment.apiURL}/Units/getUnits`, {
  //   //   params: params
  //   // });
  //   // return this.http.get<Units[]>(environment.apiURL + '/Units/getUnits/' + id);
  //   return this.http.get<Units[]>(environment.apiURL + '/Maintenances/GetListUnitsUO/' + id);
  // }
  getListOfUnits(id){
    return this.http.get(environment.apiURL + '/Maintenances/GetListUnitsUO/' + id);
  }

  getBuildingDetails(id) {
    return this.http.get<Buildings[]>(environment.apiURL + '/Buildings/' + id);
  }

  saveAgreement(obj: Createagreement) {
    return this.http.post(environment.apiURL + '/RentalAgreements', obj);
  }

  // saveTenant(obj: Tenant){
  //   return this.http.post(environment.apiURL+'/Tenants', obj)
  // }

  deleteAgreement(id: number) {
    return this.http.delete(environment.apiURL + '/RentalAgreements/' + id);
  }
}
