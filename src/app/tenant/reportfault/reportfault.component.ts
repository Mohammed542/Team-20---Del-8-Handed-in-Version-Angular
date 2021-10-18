import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Buildings } from 'src/app/landlord/createagreement/buildings.model';
import { CreateagreementService } from 'src/app/landlord/createagreement/createagreement.service';
import { Units } from 'src/app/landlord/createagreement/units.model';
import { CreatetypeComponent } from './createtype/createtype.component';
import { Faulttype } from './faulttype';
import { ReportfaultService } from './reportfault.service';

@Component({
  selector: 'app-reportfault',
  templateUrl: './reportfault.component.html',
  styleUrls: ['./reportfault.component.scss']
})
export class ReportfaultComponent implements OnInit {

  buildingList: Buildings[];
  unitList: Units[];
  faultList: Faulttype[];
  selectedUnit: string = '';


  constructor(public service: CreateagreementService, public fService: ReportfaultService, 
     private router: Router, private httpService: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fService.getFaultList().then(res => this.faultList = res as Faulttype[]);
    this.service.getBuildingList().then(res => this.buildingList = res as Buildings[]);
    this.resetTenant()
   
  }
  
  getUnits(BuildingID){
    this.service.getUnitList(BuildingID).then(res => this.unitList = res as Units[]);    
   
  }

  getDetails(event: any) {
    this.unitList.forEach(element => {
      
      if (element.UnitID == event){
        this.selectedUnit = element.UnitNumber;
        this.fService.formData.UnitNumber = element.UnitNumber        
       
        localStorage.UnitID = element.UnitID;
      } 
  
    });


   // this.selectedUnit = event.target.value;
 
  }
  getBDetails(event: any){
    this.buildingList.forEach(elements => {
      
      if (elements.BuildingID == event){
        this.selectedUnit = elements.BuildingName;
        this.fService.formData.BuildingName = elements.BuildingName   
      } 
      });

  }


  resetTenant(form?:NgForm){   
    if(form=null) 
    form.resetForm();
    this.fService.formData ={
      ReportFaultID : 0,
      BuildingName : '',
      UnitNumber : '',
      FaultType : '',
      Fault_Details : ''
    };
    this.fService.faults = [];
  
  }

  onSubmit(){
    this.fService.save(this.fService.formData).subscribe(res => {
      console.log(res)
    
      this.resetTenant();
    })

}
addFault(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width="25%";
 
this.dialog.open(CreatetypeComponent, dialogConfig);
}
}
