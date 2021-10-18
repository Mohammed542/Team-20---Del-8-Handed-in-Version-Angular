import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Maintenance } from '../maintenanceModels/Maintenance';
import { MaintenanceService } from '../maintenanceService/maintenance.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewmaintenance',
  templateUrl: './viewmaintenance.component.html',
  styleUrls: ['./viewmaintenance.component.scss']
})
export class ViewmaintenanceComponent implements OnInit {
  @ViewChild('successDeleteModal') successDeleteModal: TemplateRef<any>;
  @ViewChild('successFinaliseModal') successFinaliseModal: TemplateRef<any>;
  deleteInProgress: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  selectedMaintenance: Maintenance;
  dsiableBtnEdit: boolean = false;
  dsiableBtnFin: boolean = false;

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.maintenanceService.currentMaintenance.subscribe(maintenance => {
      this.selectedMaintenance = maintenance;
      // console.log("viewmaintenance", this.selectedMaintenance);
      console.log(this.selectedMaintenance);
      if(this.selectedMaintenance.MaintenanceStatus == "Reported"){
        this.dsiableBtnEdit = false;
        this.dsiableBtnFin = true;
      }
      else if(this.selectedMaintenance.MaintenanceStatus == "In Progress"){
        this.dsiableBtnEdit = true;
        this.dsiableBtnFin = true;
      }
      else if(this.selectedMaintenance.MaintenanceStatus == "Completed"){
        this.dsiableBtnEdit = true;
        this.dsiableBtnFin = false;
      }
      else{
        this.dsiableBtnEdit = true;
        this.dsiableBtnFin = true;
      }
    });
  }

  cancelMaintenance() {
    this.router.navigate(['/searchmaintenance']);
  }

  deleteMaintenance() {
    this.deleteInProgress = true;
    this.maintenanceService
      .deleteMaintenance(this.selectedMaintenance.MaintenanceID + '')
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => {
        this.maintenanceService.changeMaintenance(null);
        this.modalService.open(this.successDeleteModal);
      });
  }

  finaliseMaintenance() {
    this.maintenanceService
      .finaliseMaintenance(this.selectedMaintenance.MaintenanceID + '')
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => {
        this.modalService.open(this.successFinaliseModal);
        this.selectedMaintenance.MaintenanceStatus = 'Finalize';
      });
  }

  closeDeleteSuccessModal() {
    this.router.navigate(['/searchmaintenance']);
    this.modalService.dismissAll();
  }

  routeToEditMaintenance() {
    this.router.navigate(['/editmaintenance']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
