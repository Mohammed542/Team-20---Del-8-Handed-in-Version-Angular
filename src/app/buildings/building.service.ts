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
export class BuildingService {

  url = environment.apiURL + '/Building/';  

  constructor(private http: HttpClient) { }  

  GetBuildings(){
    return this.http.get(this.url + 'GetBuildings');
  }

  GetBuilding(id){
    return this.http.get(this.url + 'GetBuilding/' + id);
  }

  GetListOfBuildings(){
    return this.http.get(environment.apiURL + '/Unit/GetListOfBuildings');
  }

  AddBuilding(building) {
    // console.log(building);
    
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
      console.log(utid);
    }

    return this.http.post(this.url + 'AddBuilding/' + landlid, building, httpOptions );  
  }  

  UpdateBuilding(building) {
    // console.log(building);
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
      console.log(utid);
    }

    return this.http.post(this.url + 'UpdateBuilding/' + landlid, building, httpOptions );  
  }  

  SearchBuildings(text: string){
    return this.http.get(this.url + 'SearchBuildings/' + text);
  }

  DeleteBuilding(id: number) {
    // console.log("delete here " + id);
    
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 1){
      var landlid = sessionStorage['LandlordID'];
      console.log(utid);
    }

    return this.http.delete(this.url + 'DeleteBuilding/' + id + '/' + landlid);  
  }  

  CaptureBuildingMunicipalityBill(buildingMunicipality) {
    console.log(buildingMunicipality);
    
    var idL = sessionStorage.getItem('LandlordID');
    console.log(buildingMunicipality);
    return this.http.post(environment.apiURL + '/APL/CaptureBuildingMunicipalityBill/' + idL , buildingMunicipality, httpOptions );
  }

  GetListUnitsInBuildings(bID){
    return this.http.get(this.url + 'GetListUnitsInBuildings/' + bID);
  }
}

