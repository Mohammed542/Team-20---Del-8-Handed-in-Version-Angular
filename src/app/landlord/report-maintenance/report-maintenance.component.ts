import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { CreateagreementService } from '../createagreement/createagreement.service';
import { Buildings } from '../createagreement/buildings.model';
import { MaintenanceService } from '../maintenanceService/maintenance.service';
import { Observable } from 'rxjs';
import { Building } from '../maintenanceModels/Building';
import { Maintenance } from '../maintenanceModels/Maintenance';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-maintenance',
  templateUrl: './report-maintenance.component.html',
  styleUrls: ['./report-maintenance.component.scss']
})
export class ReportMaintenanceComponent implements OnInit {
  @ViewChild('reportModal') reportModal: TemplateRef<any>;
  Buildings$: Observable<Building[]>;
  MaintenanceList: Maintenance[] = [];

  reportMaintenanceForm = new FormGroup({
    BuildingID: new FormControl('', [Validators.required]),
    StartDate: new FormControl('', [Validators.required]),
    EndDate: new FormControl('', [Validators.required])
  });

  constructor(
    public maintenanceService: MaintenanceService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.Buildings$ = this.maintenanceService.getBuildings();
  }

  get BuildingID(): AbstractControl {
    return this.reportMaintenanceForm.get('BuildingID');
  }

  get StartDate(): AbstractControl {
    return this.reportMaintenanceForm.get('StartDate');
  }

  get StartDateString(): string {
    return `${this.StartDate.value.year}/${this.StartDate.value.month}/${this.StartDate.value.day}`;
  }

  get EndDateString(): string {
    return `${this.EndDate.value.year}/${this.EndDate.value.month}/${this.EndDate.value.day}`;
  }

  get EndDate(): AbstractControl {
    return this.reportMaintenanceForm.get('EndDate');
  }

  getReport() {
    this.maintenanceService
      .getMaintenanceReport(this.reportMaintenanceForm.value)
      .subscribe(result => {
        this.MaintenanceList = result;
        this.modalService.open(this.reportModal, {
          size: 'lg',
          backdrop: 'static'
        });
      });
  }
}
