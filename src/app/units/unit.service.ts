import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
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
export class UnitService {

  url = environment.apiURL + '/Unit/';  

  constructor(private http: HttpClient) { }  

  GetUnits(){
    return this.http.get(this.url + 'GetUnits');
  }

  GetListOfBuildings(){
    return this.http.get(this.url + 'GetListOfBuildings');
  }

  GetUnitData(id, no, month, year){
    return this.http.get(this.url + 'GetData/' + id + '/' + no + '/' + month + '/' + year);
  }

  GetUnitType(){
    return this.http.get(this.url + 'GetUnitType');
  }

  GetUnit(id){
    return this.http.get(this.url + 'GetUnit/' + id);
  }

  GetBuildingDetails(id){
    return this.http.get(this.url + 'GetBuildingDetails/' + id);
  }

  CaptureUnitMunicipalityBill(unitMunicipality) {
    console.log(unitMunicipality);
    return this.http.post(environment.apiURL + '/APL/CaptureUnitMunicipalityBill' , unitMunicipality, httpOptions );
  }  

  AddUnit(unit) {
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
      console.log(utid);
    }

    console.log(unit);
    return this.http.post(this.url + 'AddUnit/' + landlid, unit, httpOptions );  
  }  

  UpdateUnit(unit) {
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
      console.log(utid);
    }

    console.log(unit);
    return this.http.post(this.url + 'UpdateUnit/' + landlid, unit, httpOptions );  
  }  

  SearchUnits(text: string){
    return this.http.get(this.url + 'SearchUnits/' + text);
  }

  DeleteUnit(id: number) {
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
      console.log(utid);
    }

    console.log("delete here " + id);
    return this.http.delete(this.url + 'DeleteUnit/' + id + "/" + landlid);  
  }

  GetBuildings(){
    return this.http.get(environment.apiURL + '/Building/GetBuildings');
  }
}
