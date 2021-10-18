import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { ConfirmuploadproofComponent } from './confirmuploadproof/confirmuploadproof.component';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UpProofPayment } from 'src/app/UpProofPayment';
import * as _moment from 'moment';
import { SuccessfuluploadproofComponent } from './successfuluploadproof/successfuluploadproof.component';
import { MatSnackBar } from '@angular/material/snack-bar';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-proofofpayment',
  templateUrl: './proofofpayment.component.html',
  styleUrls: ['./proofofpayment.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ProofofpaymentComponent implements OnInit {
  allBuildings: any = [];
  building: any;
  unitsList: any[] = [];
  selectUnit: any;

  tenantID: any;

  base64File;
  bloobURL;

  url;

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

  @ViewChild('fileInput') myInputVariable: ElementRef;

  form: FormGroup;

  constructor(public dialog: MatDialog, private service: MainService, private router: Router, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) { }

  formData = new FormData();

  year = new Date().getFullYear();
  range = [];

  fileControl = new FormControl('');

  ngOnInit(): void {
    this.tenantID = sessionStorage["TenantID"];

    this.service.GetListBuildingUnits(this.tenantID).subscribe((data) => {
      this.allBuildings = data;
    });

    this.form = this.formBuilder.group({
      selectedBuilding: ['', Validators.required],
      selectedUnit: ['', Validators.required],
      selectedMonth: ['', Validators.required],
      selectedYear: ['', Validators.required]
    });
    // console.log(this.year);
    var intervl = this.year - 2015;
    // console.log(intervl);
    // for (var i = -10; i < 10; i++) {
    //   this.range.push({
    //     label: this.year + i,
    //     value: parseInt(String(this.year + i).slice(0, 4))
    //   });
    // }
    for (let i = 0; i <= intervl; i++) {
      this.range.push({
        label: 2015 + i,
        value: parseInt(String(2015 + i))
      })
    }

    this.range = this.range.reverse();
    // console.log(this.range.length);
    // console.log(this.range[this.range.length-1]);
    // console.log(this.range[this.range.length-1].value);
    // this.form.controls['selectedYear'].patchValue(this.range[this.range.length-1].label);
  }

  getErrorMessage(data) {
    if (data == "month") {
      if (this.form.controls.selectedMonth.hasError('required')) {
        return 'Please provide a month';
      }
    }
    if (data == "year") {
      if (this.form.controls.selectedYear.hasError('required')) {
        return 'Please provide a year';
      }
    }
    if (data == "building") {
      if (this.form.controls.selectedBuilding.hasError('required')) {
        return 'Please select a building';
      }
    }
    if (data == "unit") {
      if (this.form.controls.selectedUnit.hasError('required')) {
        return 'Please select a unit';
      }
    }
    if (data == "file") {
      if (this.form.controls.selectedUnit.hasError('required')) {
        return 'Please select a file';
      }
    }

    //return this.form.controls.selectedUnit.hasError('email') ? 'Not a valid email' : '';
  }

  fileName: string = "";
  fileToUpload: File;

  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: _moment.Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: _moment.Moment, datepicker: MatDatepicker<_moment.Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  onBuildingChange(event) {
    this.building = event.value;
    if (this.building != undefined) {
      this.building = event.value;
      console.log(this.building);
      console.log(event);
      this.unitsList = [];

      this.allBuildings.forEach(element => {
        console.log(element);
        if (element.Building.BuildingID == this.building) {
          console.log(element.Building.BuildingID);
          element.Units.forEach(element2 => {
            console.log(element2);
            this.unitsList.push(element2);
          });
        }
      });
      console.log(this.unitsList);
    }
    else {
      this.form.controls["selectedUnit"].setValue(undefined);
      this.unitsList = [];
    }
  }

  onUnitChange(event) {
    this.selectUnit = event.value;
    console.log(this.selectUnit);
  }

  onClick(form) {
    console.log(form);
  }

  onClickCancel() {
    this.router.navigate(["tenant/readproofofpayment"]);
  }

  MAX_SIZE: number = 1048576;

  theFile: any = null;
  messages: string[] = [];
  month: string = null;
  yeaR: string = null;

  onMonthChange(event) {
    this.month = event.value;
  }

  onYearChange(event) {
    console.log(event.value);
    this.yeaR = event.value;
  }

  onFileChange(event) {
    console.log(event);
    this.url = null;
    this.base64File = null;

    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set theFile property
        // this.theFile = event.target.files[0];
        // console.log(this.theFile);

        if (event.target.files[0].type == "application/pdf") {
          if (event.target.files[0].name.length <= 50) {
            this.theFile = event.target.files[0];
            console.log(this.theFile);
            this.base64File = "1";
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              console.log("readerresult", reader.result);
              this.base64File = reader.result;

              var b64WOD = (this.base64File).slice(28);
              console.log("b64WOD", b64WOD);

              const byteCharacters = atob(b64WOD);

              const byteNumbers = new Array(byteCharacters.length);
              for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }

              const byteArray = new Uint8Array(byteNumbers);

              const blob = new Blob([byteArray], { type: 'application/pdf' });

              const blobUrl = URL.createObjectURL(blob);

              console.log("blobUrl", blobUrl);

              this.bloobURL = blobUrl;
              document.querySelector("iframe").src = blobUrl;
            };
          }
        }
        else {
          console.log("not a pdf");

          const mimeType = event.target.files[0].type;
          if (mimeType.match(/image\/*/) == null) {
            // console.log("Only images are supported.");
            if(event.target.files[0].name.length > 50){
              this.matSnackBar.open("The file type for file: " + event.target.files[0].name + " is not supported. Please upload an image or a pdf. The name of the selected file exceeds 50 characters.", 'x', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right',
                panelClass: ['yellow-snackbar']
              });
            }else{
              this.matSnackBar.open("The file type for file: " + event.target.files[0].name + " is not supported. Please upload an image or a pdf.", 'x', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right',
                panelClass: ['yellow-snackbar']
              });
            }
            return;
          }
          else if(event.target.files[0].name.length > 50){
            this.matSnackBar.open("The name for the selected file exceeds 50 characters. Please rename the file and try again.", 'x', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['yellow-snackbar']
            });
            return;
          }

          this.url = "1";
          this.theFile = event.target.files[0];
          console.log(this.theFile);

          const reader = new FileReader();
          reader.readAsDataURL(this.theFile);
          reader.onload = (_event) => {
            this.url = reader.result;
          }
        }
      }
      else {
        // Display error message
        // this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
        if (event.target.files[0].size > this.MAX_SIZE && event.target.files[0].name.length > 50) {
          this.matSnackBar.open("File: " + event.target.files[0].name + " is too large to upload and the name of the file exceeds 50 characters.", 'x', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['yellow-snackbar']
          });
        }
        else if (event.target.files[0].size > this.MAX_SIZE) {
          this.matSnackBar.open("File: " + event.target.files[0].name + " is too large to upload.", 'x', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['yellow-snackbar']
          });
        }
        else {
          this.matSnackBar.open("There was an error trying to select file: " + event.target.files[0].name + " Please try again.", 'x', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['yellow-snackbar']
          });
        }
      }
    }
  }

  removeFile() {
    this.theFile = null;
    this.base64File = null;
    this.url = null;
    this.myInputVariable.nativeElement.value = '';
  }

  private readAndUploadFile(theFile: any) {
    let file = new UpProofPayment();

    // Set File Information
    file.RentalAgreementID = 1;
    file.PaymentMonth = this.month;
    file.PaymentYear = Number(this.yeaR);
    file.UnitID = this.selectUnit;
    file.fileName = theFile.name;
    file.fileSize = theFile.size;
    file.fileType = theFile.type;
    file.lastModifiedTime = theFile.lastModified;
    file.lastModifiedDate = theFile.lastModifiedDate;

    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();

    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      file.fileAsBase64 = reader.result.toString();

      console.log(file);
      console.log(file.fileAsBase64);


      // POST to server
      this.service.uploadFile(file).subscribe((resp: any) => {
        console.log(resp);

        if (resp.Success) {
          this.matSnackBar.open(resp.Message, 'x', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['green-snackbar']
          });
          this.router.navigateByUrl("tenant/readproofofpayment")
        }
        else {
          this.matSnackBar.open(resp.Message, 'x', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
        }
        // this.messages.push("Upload complete");
        // this.openSuccessDialog();
        // console.log(resp);
      });
    }

    // Read the file
    reader.readAsDataURL(theFile);
  }

  uploadFile(): void {
    this.readAndUploadFile(this.theFile);
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmuploadproofComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.uploadFile();
      }
    });
  }

  openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessfuluploadproofComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl("tenant/readproofofpayment");
    });
  }
}
