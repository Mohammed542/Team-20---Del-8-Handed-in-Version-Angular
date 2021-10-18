import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Maintenance } from '../maintenanceModels/Maintenance';
import { MaintenanceService } from '../maintenanceService/maintenance.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-editmaintenance',
  templateUrl: './editmaintenance.component.html',
  styleUrls: ['./editmaintenance.component.scss']
})
export class EditmaintenanceComponent implements OnInit {
  @ViewChild('successEditModal') successEditModal: TemplateRef<any>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  selectedMaintenance: Maintenance;
  ammountPattern = '^(\\d{0,9})$';
  editForm = new FormGroup({
    amountQuoted: new FormControl('', [
      Validators.required,
      Validators.pattern(this.ammountPattern)
    ]),
    dateOfEmployment: new FormControl('', Validators.required)
  });

  get amountQuoted(): AbstractControl {
    return this.editForm.get('amountQuoted');
  }

  get dateOfEmployment(): AbstractControl {
    return this.editForm.get('dateOfEmployment');
  }

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.maintenanceService.currentMaintenance.subscribe(maintenance => {
      this.selectedMaintenance = maintenance;
      var maintenanceDateObject = new Date(maintenance.DateOfEmployment);
      var datePicker = {
        day: maintenanceDateObject.getDate(),
        month: maintenanceDateObject.getMonth() + 1,
        year: maintenanceDateObject.getFullYear()
      };
      this.editForm.get('dateOfEmployment').setValue(datePicker);
      this.editForm.get('amountQuoted').setValue(maintenance.AmountQuoted);
    });
  }

  cancelEdit() {
    this.modalService.dismissAll();
    this.router.navigate(['/viewmaintenance']);
  }

  routeToViewMaintenance() {
    this.modalService.dismissAll();
    this.router.navigate(['/viewmaintenance']);
  }

  onSubmit() {
    let dateString = `${this.dateOfEmployment.value.year}-${this.dateOfEmployment.value.month}-${this.dateOfEmployment.value.day}`;
    this.maintenanceService
      .updateMaintenanceDetails(
        this.selectedMaintenance.MaintenanceID + '',
        this.amountQuoted.value,
        dateString
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => {
        this.selectedMaintenance.AmountQuoted = x.AmountQuoted;
        this.selectedMaintenance.DateOfEmployment = x.DateofEmployment;
        this.maintenanceService.changeMaintenance(this.selectedMaintenance);
        this.modalService.open(this.successEditModal);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
