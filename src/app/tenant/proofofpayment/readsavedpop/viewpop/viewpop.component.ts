import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-viewpop',
  templateUrl: './viewpop.component.html',
  styleUrls: ['./viewpop.component.scss']
})
export class ViewpopComponent implements OnInit {

  proofID = sessionStorage['ProofOfPaymentID'];
  proofType = sessionStorage['ProofOfPaymentFileType'].toLowerCase();
  fileBase64;

  constructor(private router: Router, private service: MainService, private matSnackBar: MatSnackBar, private dialogRef: MatDialogRef<ViewpopComponent>) { }

  ngOnInit(): void {
    this.service.getFile(this.proofID).subscribe((res: any) => {
      if (res.Success) {
        this.fileBase64 = res.Result;
        // console.log(this.fileBase64);


        if (this.proofType == "pdf") {
          const byteCharacters = atob(this.fileBase64);

          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);

          const blob = new Blob([byteArray], { type: 'application/pdf' });

          const blobUrl = URL.createObjectURL(blob);
          document.querySelector("iframe").src = blobUrl;
          //document.querySelector("object").data = blobUrl;
        }
        else {
          const bstr = atob(this.fileBase64);
          let n = bstr.length;
          const u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          const blob = new Blob([u8arr], { type: 'image/' + this.proofType });

          const bloblURLI = URL.createObjectURL(blob);

          document.querySelector("iframe").src = bloblURLI;
        }
      }
      else{
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
        this.dialogRef.close();
      }
    });
  }
}
