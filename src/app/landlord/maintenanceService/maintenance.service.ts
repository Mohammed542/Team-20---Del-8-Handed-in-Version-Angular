import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Building } from '../maintenanceModels/Building';
import { MaintenanceType } from '../maintenanceModels/MaintenanceType';
import { Maintenance } from '../maintenanceModels/Maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private api = environment.apiURL + '/';
  public selectedMaintenance: Maintenance = null;
  private maintenanceSource = new BehaviorSubject(this.selectedMaintenance);
  currentMaintenance = this.maintenanceSource.asObservable();

  constructor(private http: HttpClient) {}

  getBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(`${this.api}Buildings`);
  }

  getMaintenanceTypes(): Observable<MaintenanceType[]> {
    return this.http.get<MaintenanceType[]>(`${this.api}MaintenanceTypes`);
  }

  getMaintenanceReport(data: any): Observable<Maintenance[]> {
    var body = {
      BuildingID: data.BuildingID,
      StartDate: `${data.StartDate.year}/${data.StartDate.month}/${data.StartDate.day}`,
      EndDate: `${data.EndDate.year}/${data.EndDate.month}/${data.EndDate.day}`
    };
    return this.http.post<Maintenance[]>(
      `${this.api}GetMaintenanceReport`,
      body
    );
  }

  getMaintenanceByBuildingAndType(
    buildingId: string,
    MaintenanceTypeId: string
  ): Observable<Maintenance[]> {
    let params = new HttpParams();
    params = params.append('BuildingId', buildingId);
    params = params.append('MaintenanceTypeId', MaintenanceTypeId);
    return this.http.get<Maintenance[]>(
      `${this.api}GetMaintenanceByBuildingAndType`,
      { params: params }
    );
  }

  deleteMaintenance(MaintenanceID: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('MaintenanceID', MaintenanceID);
    return this.http.delete<any>(`${this.api}RemoveMaintenance`, {
      params: params
    });
  }

  updateMaintenanceDetails(
    MaintenanceID: string,
    amountQuoted: string,
    dateOfEmployment: string
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('MaintenanceID', MaintenanceID);
    params = params.append('AmountQuoted', amountQuoted);
    params = params.append('DateOfEmployment', dateOfEmployment);
    return this.http.get<any>(`${this.api}UpdateMaintenanceDetails`, {
      params: params
    });
  }

  finaliseMaintenance(MaintenanceID: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('MaintenanceID', MaintenanceID);
    return this.http.get<any>(`${this.api}FinaliseMaintenance`, {
      params: params
    });
  }

  changeMaintenance(newMaintenance: Maintenance) {
    this.maintenanceSource.next(newMaintenance);
  }
}
