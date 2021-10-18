import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Faulttype } from './faulttype';
import { Reportfault } from './reportfault';

@Injectable({
  providedIn: 'root'
})
export class ReportfaultService {
  formData: Reportfault;
  faults: []
  faultTypes: Faulttype;
  fTypeList: Faulttype[];

  constructor(private http: HttpClient) { }

  save(obj: Reportfault){
    return this.http.post(environment.apiURL+'/ReportFaults', obj)
  }

  getFaultList(){
    return this.http.get(environment.apiURL+'/FautTypes').toPromise();
  }

  CreateFaultType(obj: Faulttype) {
    return this.http.post(environment.apiURL + '/FautTypes', obj);
  }
}
