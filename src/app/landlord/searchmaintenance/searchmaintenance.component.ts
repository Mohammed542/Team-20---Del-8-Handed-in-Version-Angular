import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Building } from '../maintenanceModels/Building';
import { MaintenanceService } from '../maintenanceService/maintenance.service';
import { MaintenanceType } from '../maintenanceModels/MaintenanceType';
import { Maintenance } from '../maintenanceModels/Maintenance';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchmaintenance',
  templateUrl: './searchmaintenance.component.html',
  styleUrls: ['./searchmaintenance.component.scss']
})
export class SearchmaintenanceComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  Buildings$: Observable<Building[]>;
  Maintenances$: Observable<Maintenance[]>;
  MaintenanceTypes$: Observable<MaintenanceType[]>;
  maintenanceTypeSelected: string = null;
  buildingSelected: string = null;
  MaintenanceResult: Maintenance[] = null;
  formvalid: boolean = false;

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Buildings$ = this.maintenanceService.getBuildings();
    this.MaintenanceTypes$ = this.maintenanceService.getMaintenanceTypes();
  }

  searchMaintenance() {
    this.maintenanceService
      .getMaintenanceByBuildingAndType(
        this.buildingSelected,
        this.maintenanceTypeSelected
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.MaintenanceResult = result;
      });
  }

  routeToViewMaintenance(maintenance: Maintenance) {
    event.preventDefault();
    this.maintenanceService.changeMaintenance(maintenance);
    this.router.navigate(['/viewmaintenance']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
