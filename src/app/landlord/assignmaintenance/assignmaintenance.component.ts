import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Maintenance } from '../maintenanceModels/Maintenance';
import { MaintenanceService } from '../maintenanceService/maintenance.service';

@Component({
  selector: 'app-assignmaintenance',
  templateUrl: './assignmaintenance.component.html',
  styleUrls: ['./assignmaintenance.component.scss']
})
export class AssignmaintenanceComponent implements OnInit {

  url = environment.apiURL;

  buildingsList: any;
  maintenanceTypeList: any;
  spEmailList: any;

  spName = "";

  maintenance: any;

  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private maintenanceService: MaintenanceService, private router: Router) { }

  ngOnInit(): void {
    this.http.get(this.url + '/Buildings').subscribe(result => {
      this.buildingsList = result;
    });

    this.http.get(this.url + '/MaintenanceTypes').subscribe(result => {
      this.maintenanceTypeList = result;
    });

    this.http.get(this.url + '/ServiceProviders').subscribe(result => {
      this.spEmailList = result;
    });

    this.form = this.formBuilder.group({
      BuildingID: [, Validators.required],
      MaintenanceTypeID: [, Validators.required],
      ServiceProviderID: [, Validators.required],
      AmountQuoted: [, Validators.required],
      DateOfEmployment: [, Validators.required]
    });
  }

  setName(sp) {
    this.spEmailList.forEach(element => {
      if (element.ServiceProviderID == sp) {
        this.spName = element.Name + " " + element.Surname;
      }
    });
  }

  onSubmit(form) {
    console.log("submitted");
    console.log(form);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(this.url + '/Maintenances', form, httpOptions).subscribe(result => {
      this.maintenance = result;
      this.maintenanceService.changeMaintenance(this.maintenance);


    });
  }

  viewMaintenance() {
    this.router.navigate(["/viewmaintenance"]);
  }


}
