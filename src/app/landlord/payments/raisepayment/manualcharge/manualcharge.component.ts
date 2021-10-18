import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ConfmanualchargeComponent } from '../confmanualcharge/confmanualcharge.component';

@Component({
  selector: 'app-manualcharge',
  templateUrl: './manualcharge.component.html',
  styleUrls: ['./manualcharge.component.scss']
})
export class ManualchargeComponent implements OnInit {
  allBuildings: any = [];
  building: any;
  unitsList: any[] =[];
  selectUnit: any;

  form: FormGroup;

  constructor(private dialog: MatDialog, private router: Router, private formBuilder: FormBuilder, private service: MainService) { }

  ngOnInit(): void {
    this.service.GetListBuildingUnitsLandlord().subscribe(result => {
      this.allBuildings = result;
    });

    this.form = this.formBuilder.group({
      ChargeName: [, [Validators.required, Validators.pattern('[A-Za-z ]+'), Validators.maxLength(49)]],
      ChargeAmount: [, [Validators.required, Validators.pattern('[0-9]*\.[0-9]+')]],
      BuildingID: [, Validators.required],
      UnitID: [, Validators.required]
    });
  }

  getErrorMessage(data) {
    if (data == "name") {
      if (this.form.controls.ChargeName.hasError('required')) {
        return 'You must provide a charge name';
      }
      if (this.form.controls.ChargeName.hasError('pattern')) {
        return 'Charge name can only contain letters and spaces';
      }
      if (this.form.controls.ChargeName.hasError('maxlength')) {
        return 'Charge name too long';
      }
    }
    if (data == "amount") {
      if (this.form.controls.ChargeAmount.hasError('required')) {
        return 'You must provide an amount';
      }
      if (this.form.controls.ChargeAmount.hasError('pattern')) {
        return 'Incorrect amount format';
      }
    }
    if (data == "building") {
      if (this.form.controls.BuildingID.hasError('required')) {
        return 'You must select a building';
      }
    }
    if (data == "unit") {
      if (this.form.controls.UnitID.hasError('required')) {
        return 'You must select a unit';
      }
    }
  }

  onBuildingChange(event) {
    this.building = event.value;
    // console.log(this.building);
    // console.log(event);
    this.unitsList = [];

    // this.allBuildings.forEach(element => {
    //   console.log(element);
    //   if (element.Building.BuildingID == this.building) {
    //     console.log(element.Building.BuildingID);
    //     element.Units.forEach(element2 => {
    //       console.log(element2);
    //       this.unitsList.push(element2);
    //     });
    //   }
    // });
    // console.log(this.unitsList);
    if(this.building != undefined){
      this.allBuildings.forEach(element => {
        // console.log(element);
        if (element.Building.BuildingID == this.building) {
          // console.log(element.Building.BuildingID);
          element.Units.forEach(element2 => {
            // console.log(element2);
            this.unitsList.push(element2);
          });
        }
      });
    }
    else{
      this.form.controls["UnitID"].setValue(undefined);
      this.selectUnit = undefined;
    }
  }

  onUnitChange(event){
    this.selectUnit = event.value;
    // console.log(this.selectUnit);

    if(this.selectUnit != undefined){
      this.service.getProofOfPayments(this.selectUnit).subscribe(result => {
        // console.log(result);
      });
    }
  }

  openDialog(form) {
    console.log(form);
    const dialogRef = this.dialog.open(ConfmanualchargeComponent, {
      restoreFocus: false,
      data:{
        ManualCharge: {
          ChargeName: form.ChargeName,
          ChargeAmount: form.ChargeAmount,
          BuildingID: form.BuildingID,
          UnitID: form.UnitID
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {     
    });
  }

  clickCancel(){
    this.router.navigateByUrl('landlord/invoice');
  }
}
