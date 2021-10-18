import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-save-status',
  templateUrl: './save-status.component.html',
  styleUrls: ['./save-status.component.scss']
})
export class SaveStatusComponent implements OnInit {

  formGroup: FormGroup;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<SaveStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private matSnackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      description: new FormControl({ value: this.data?.Description, disabled: false }, [Validators.required]),
    });
  }

  onSave() {
    this.loading = true;
    this.adminService.save('Status', this.data?.Id ?? 0, this.formGroup.controls.description.value).subscribe((response: any) => {
      if (response.Success) {
        this.matSnackBar.open(response.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.dialogRef.close();
      } else {
        this.matSnackBar.open(response.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
      this.loading = false;
    }, () => {
      this.matSnackBar.open('Failed', 'x', {
        duration: 2500,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['red-snackbar']
      });
      this.loading = false;
    });
  }
}
