import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  templateUrl: './tenant-agreement-viewer.component.html',
  styleUrls: ['./tenant-agreement-viewer.component.scss']
})
export class TenantAgreementViewerComponent implements OnInit {
  RAID = sessionStorage['RentalAgreementID'];
  fileBase64;

  constructor(private router: Router, private service: MainService, private matSnackBar: MatSnackBar, private dialogRef: MatDialogRef<TenantAgreementViewerComponent>) { }

  ngOnInit(): void {
    this.service.GetFileRA(this.RAID).subscribe((res: any) => {
      if (res.Success) {
        this.fileBase64 = res.Result;
        // console.log(this.fileBase64);
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
