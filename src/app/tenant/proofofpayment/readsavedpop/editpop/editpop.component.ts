import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { UpProofPayment } from 'src/app/UpProofPayment';
import { inflate } from 'zlib';
import { ConfeditpopComponent } from './confeditpop/confeditpop.component';
import { SsfleditpopComponent } from './ssfleditpop/ssfleditpop.component';

@Component({
  selector: 'app-editpop',
  templateUrl: './editpop.component.html',
  styleUrls: ['./editpop.component.scss']
})
export class EditpopComponent implements OnInit {
  popID = sessionStorage['ProofOfPaymentID'];

  allBuildings: any;
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

  formData = new FormData();

  year = new Date().getFullYear();
  range = [];

  fileName: string = "";
  fileToUpload: File;

  MAX_SIZE: number = 1048576;

  theFile: any = null;
  messages: string[] = [];
  month: string = null;
  yeaR: string = null;

  retrievedProofOfPayment: any;

  inFile = new UpProofPayment();

  constructor(public dialog: MatDialog, private service: MainService, private router: Router, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.tenantID = sessionStorage["TenantID"];
    // if (this.tenantID == 0 || this.tenantID == null) {
    //   this.tenantID = 1;
    // }

    // this.service.GetListBuildingUnits(this.tenantID).subscribe((data) => {
    //   this.allBuildings = data;
    // });

    this.form = this.formBuilder.group({
      selectedBuilding: [Validators.required],
      selectedUnit: [Validators.required],
      selectedMonth: [Validators.required],
      selectedYear: [Validators.required]
    });

    for (var i = -30; i < 10; i++) {
      this.range.push({
        label: this.year + i,
        value: parseInt(String(this.year + i).slice(0, 4))
      });
    }

    this.base64File = "1";
    this.url = "1";

    this.service.getProofOfPayment(this.popID).subscribe((res: any) => {
      if (res.Success) {
        this.retrievedProofOfPayment = res.Result;

        this.form.controls['selectedBuilding'].patchValue(this.retrievedProofOfPayment[0].BuildingID);

        this.service.GetListBuildingUnits(this.tenantID).subscribe((data) => {
          this.allBuildings = data;
          this.onBuildingChange(this.retrievedProofOfPayment[0].BuildingID);
        });

        this.form.controls['selectedUnit'].patchValue(this.retrievedProofOfPayment[0].UnitID);
        this.form.controls['selectedMonth'].patchValue(this.retrievedProofOfPayment[0].Month);
        this.form.controls['selectedYear'].patchValue(this.retrievedProofOfPayment[0].Year);

        this.inFile.fileType = this.retrievedProofOfPayment[0].Type;
        this.inFile.fileAsBase64 = this.retrievedProofOfPayment[0].base64File;
        this.inFile.fileName = this.retrievedProofOfPayment[0].FileName;

        this.onFileChange("base64");
      }
      else {
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  onBuildingChange(event) {

    if (!event.value) {
      this.building = event;
    }
    else {
      this.building = event.value;
    }

    this.unitsList = [];

    this.allBuildings.forEach(element => {
      if (element.Building.BuildingID == this.building) {
        element.Units.forEach(element2 => {
          this.unitsList.push(element2);
        });
      }
    });
  }

  onUnitChange(event) {
    this.selectUnit = event.value;
  }

  onMonthChange(event) {
    this.month = event.value;
  }

  onYearChange(event) {
    this.yeaR = event.value;
  }

  onFileChange(event) {
    if (event == "base64") {
      this.theFile = {};
      this.theFile.name = this.inFile.fileName;
      this.theFile.type = this.inFile.fileType;
      this.theFile.size = 0;
      this.theFile.lastModified = 0;
      this.theFile.lastModifiedDate = "0";

      if (this.inFile.fileType == "PDF") {
        this.url = "";
        this.base64File = this.inFile.fileAsBase64;

        const byteCharacters = atob(this.base64File);

        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: 'application/pdf' });

        const blobUrl = URL.createObjectURL(blob);

        this.bloobURL = blobUrl;
        document.querySelector("iframe").src = "1";
        document.querySelector("iframe").src = blobUrl;
      }
      else {
        this.base64File = "";

        var b64str = this.inFile.fileAsBase64;

        b64str = "data:image/jpeg;base64," + b64str;
        this.url = b64str;
      }
    }
    else {
      this.theFile = null;
      if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 1MB
        if (event.target.files[0].size < this.MAX_SIZE) {
          // Set theFile property
          this.theFile = event.target.files[0];
        }
        else {
          // Display error message
          this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
        }
      }

      if (this.theFile.type == "application/pdf") {
        this.base64File = "1";
        this.url = "";
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.base64File = reader.result;

          var b64WOD = (this.base64File).slice(28);

          const byteCharacters = atob(b64WOD);

          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);

          const blob = new Blob([byteArray], { type: 'application/pdf' });

          const blobUrl = URL.createObjectURL(blob);

          this.bloobURL = blobUrl;
          document.querySelector("iframe").src = blobUrl;
        };
      }
      else {
        this.url = "1";
        this.base64File = "";

        const mimeType = this.theFile.type;
        if (mimeType.match(/image\/*/) == null) {
          console.log("Only images are supported.");
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(this.theFile);
        reader.onload = (_event) => {
          this.url = reader.result;
        }
      }
    }
  }

  private readAndUploadFile(theFile: any) {
    let file = new UpProofPayment();

    // Set File Information
    file.RentalAgreementID = 1;
    file.PaymentMonth = this.form.controls.selectedMonth.value;
    file.PaymentYear = this.form.controls.selectedYear.value;
    file.UnitID = this.form.controls.selectedUnit.value;
    file.fileName = theFile.name;
    file.fileSize = theFile.size;
    file.fileType = theFile.type;
    file.lastModifiedTime = theFile.lastModified;
    file.lastModifiedDate = theFile.lastModifiedDate;

    if (theFile.size == 0 && theFile.lastModified == 0 && theFile.lastModifiedDate == "0") {
      file.fileAsBase64 = this.inFile.fileAsBase64;
      console.log("inFile");

      this.service.editProofOfPayment(file, this.popID).subscribe((res: any) => {
        // this.openSuccessDialog();
        if(res.Success){
          this.matSnackBar.open(res.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['green-snackbar']
          });
          this.router.navigateByUrl("tenant/readproofofpayment");
        }
        else{
          this.matSnackBar.open(res.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
        }
      });
    }
    else {
      // Use FileReader() object to get file to upload
      // NOTE: FileReader only works with newer browsers
      let reader = new FileReader();

      // Setup onload event for reader
      reader.onload = () => {
        // Store base64 encoded representation of file
        file.fileAsBase64 = reader.result.toString();

        // POST to server
        this.service.editProofOfPayment(file, this.popID).subscribe((resp: any) => {
          // this.messages.push("Upload complete");
          // this.openSuccessDialog();

          if(resp.Success){
            this.matSnackBar.open(resp.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });
            this.router.navigateByUrl("tenant/readproofofpayment");
          }
          else{
            this.matSnackBar.open(resp.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
      }

      // Read the file
      reader.readAsDataURL(theFile);
    }
  }

  uploadFile(): void {
    this.readAndUploadFile(this.theFile);
  }

  removeFile() {
    this.theFile = null;
    this.base64File = null;
    this.url = null;
    this.myInputVariable.nativeElement.value = '';
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfeditpopComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.uploadFile();
      }
    });
  }

  openSuccessDialog() {
    const dialogRef = this.dialog.open(SsfleditpopComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl("tenant/readproofofpayment");
    });
  }

  onClick(form) {
    console.log(form);
  }

  onClickCancel() {
    this.router.navigateByUrl("tenant/readproofofpayment");
  }
}
