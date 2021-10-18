import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-add-buiiding',
  templateUrl: './add-buiiding.component.html',
  styleUrls: ['./add-buiiding.component.scss']
})
export class AddBuiidingComponent implements OnInit {

  form: FormGroup;
  buildings : any;

  constructor(private service: BuildingService,  private router: Router,  private formbulider: FormBuilder, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formbulider.group({  
      BuildingName: ['', [Validators.required]],  
      Unitsowned: ['', [Validators.required]],   
      City: ['', [Validators.required, Validators.pattern('[A-Za-z ]+'), Validators.maxLength(49)]],
      Address: ['', [Validators.required]],  
      Suburb: ['', [Validators.required, Validators.pattern('[A-Za-z ]+'), Validators.maxLength(49)]],
      PostalCode: ['', [Validators.required]],  
      Size: ['', [Validators.required]],  
    }); 
  }

  AddBuilding(e){
    let building = {
      "LandlordID": sessionStorage["LandlordID"], //logged in
      "BuildingName": e.target.BuildingName.value,
      "NumberofUnitsOwned": e.target.Unitsowned.value,
      "City": e.target.City.value,
      "StreetAddress": e.target.Address.value,
      "Suburb": e.target.Suburb.value,
      "PostalCode": e.target.PostalCode.value,
      "Size": e.target.Size.value,
    };

    this.service.AddBuilding(building).subscribe((x: any) => {
      if(x.Success){
        this.matSnackBar.open(x.Message, 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.buildings = x;
        this.router.navigate(["buildings"]);
      }
      else{
        this.matSnackBar.open(x.Message, 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  cancel(){
    this.router.navigate(["buildings"])
  }

  getErrorMessage(data) {
    if (data == "name") {
      if (this.form.controls.FirstName.hasError('required')) {
        return 'Please provide a city name';
      }
      if (this.form.controls.FirstName.hasError('pattern')) {
        return 'City name can only contain letters';
      }
      if (this.form.controls.FirstName.hasError('maxlength')) {
        return 'City name is too long';
      }
    }
  }
}
