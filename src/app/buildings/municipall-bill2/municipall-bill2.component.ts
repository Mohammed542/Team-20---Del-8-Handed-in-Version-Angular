import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingService } from '../building.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  

@Component({
  selector: 'app-municipall-bill2',
  templateUrl: './municipall-bill2.component.html',
  styleUrls: ['./municipall-bill2.component.scss']
})
export class MunicipallBill2Component implements OnInit {
  clicked: boolean = false;

  buildings : any;
  types : any;
  form: FormGroup;

  Days: any;
  ConsumptionAmount: any;
  ConsumptionChargeAmount: any;
  FixedChargeAmount: any;
  SewageDisposalChargeUnits: any;
  DisposalChargeAmount: any;

  DisposalChargePercentage: any;
  DisposalChargeRate: any;
  SewageFixedChargeRate: any;

  BuildingElectrictyAmount: any;

  MunicipallBillBuildingID: any;
  Month: any;
  Rate: any;
  PreviousDate: any;
  PreviousReading: any;
  CurrentDate: any;
  CurrentReading: any;
  ConsumptionChargeRate: any;
  FixedChargeRate: any;
  BuildingUnits: any;
  BuildingRate: any;
  BuildingAmount: any;
      // DisposalChargePercentage: data.DisposalChargePercentage;
      // DisposalChargeRate: data.DisposalChargeRate;
      // SewageFixedChargeRate: data.SewageFixedChargeRate;

  constructor(private service: BuildingService,  private router: Router,  private formbulider: FormBuilder, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formbulider.group({  
    //  todo: refine validations  
      Units: ['', [Validators.required]],  
      Rate: ['', [Validators.required]],  
    });

    const APLs = JSON.parse(localStorage.getItem('municipalbillpage1APLs'));
    var previousPageData = JSON.parse(localStorage.getItem('municipalbillpage1Data'));

    this.Days = APLs.AmountOfDays;
    this.ConsumptionAmount =APLs.ConsumptionAmount;
    this.FixedChargeAmount =APLs.FixedChargeAmount;

    this.DisposalChargePercentage = previousPageData.DisposalChargePercentage;
    this.DisposalChargeRate = previousPageData.DisposalChargeRate;
    this.SewageFixedChargeRate = previousPageData.SewageFixedChargeRate;

    this.SewageDisposalChargeUnits = this.DisposalChargePercentage * this.ConsumptionAmount ;
    this.DisposalChargeAmount = this.DisposalChargeRate * this.SewageDisposalChargeUnits;
  
    ////municipal
    this.MunicipallBillBuildingID = previousPageData.MunicipallBillBuildingID;
    this.Month = previousPageData.Month;
    ////water&sani
    this.PreviousDate = previousPageData.PreviousDate;
    this.CurrentDate = previousPageData.CurrentDate;
    this.PreviousReading = previousPageData.PreviousReading;
    this.CurrentReading = previousPageData.CurrentReading;
    this.ConsumptionChargeRate = previousPageData.ConsumptionChargeRate;
    this.FixedChargeRate = previousPageData.FixedChargeRate;
    ////sew
    this.DisposalChargePercentage = previousPageData.DisposalChargePercentage;
    this.DisposalChargeRate = previousPageData.DisposalChargeRate;
    ////RatesTaxes
    this.Rate = previousPageData.Rate;
  }

  Save(e){
    let units =e.target.Units.value;
    let rate  = e.target.Rate.value;

    this.BuildingElectrictyAmount = units * rate;

    this.BuildingUnits = units;
    this.BuildingRate = rate;
    this.BuildingAmount = this.BuildingElectrictyAmount;

    this.clicked = true;
  }

  Capture(){
    // todo: recreate this object then send all dta to the db
    let databaseData = {

      //Municipal Table
      "BuildingID": this.MunicipallBillBuildingID,
      "Month": this.Month,

      //WaterandSanitationBuilding Table
      "PreviousDate": this.PreviousDate,
      "CurrentDate": this.CurrentDate,
      "PreviousReading": this.PreviousReading,
      "CurrentReading": this.CurrentReading,
      "ConsumptionChargeRate": this.ConsumptionChargeRate,
      "FixedChargeRate": this.FixedChargeRate,

      //SewageBuilding Table
      "DisposalChargePercent": this.DisposalChargePercentage,
      "DisposalChargeRate": this.DisposalChargeRate,

      //ElectricityBuilding Table
      "BuildingUnits": this.BuildingUnits,
      "BuildingRate": this.BuildingRate,
      "BuildingAmount": this.BuildingAmount,

      //RateBuildingTable
      "RateAmount": this.Rate,
    };

    console.log(databaseData);
    

    this.service.CaptureBuildingMunicipalityBill(databaseData).subscribe((x: any) => {
      this.buildings = x;

      if(x.Success){
        this.matSnackBar.open(x.Message, 'x', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.router.navigateByUrl("landlord/view-municipal-bills");
      }
      else{
        this.matSnackBar.open(x.Message, 'x', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
      // if(x != null){
      //   this.router.navigateByUrl("landlord/home");
      // }
    })
  }

}
