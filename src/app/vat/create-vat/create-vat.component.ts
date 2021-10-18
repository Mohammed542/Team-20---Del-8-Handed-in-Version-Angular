import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VatService } from '../vat.service';

@Component({
  selector: 'app-create-vat',
  templateUrl: './create-vat.component.html',
  styleUrls: ['./create-vat.component.scss'],
})
export class CreateVatComponent implements OnInit {
  createForm = new FormGroup({
    VATPercentage: new FormControl()
  });

  percentage: any;
  constructor(
    private service: VatService,
    private formbulider: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm = this.formbulider.group({
      VATPercentage: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
    });
  }

  vat() {
    this.router.navigate(['admin/vat']);
  }

  async CreateVATPercentage(event) {
    await this.service
      .CreateVATPercentage(this.createForm.controls['VATPercentage'].value)
      .subscribe((x) => {
        // todo: show dialog on successful/failed crud
        console.log(x);
        this.router.navigate(['admin/vat']);
      });
  }

  getErrorMessage(property) {
    switch (property) {
      case 'VATPercentage':
        if (this.createForm.controls.VATPercentage.hasError('required')) {
          return 'VAT can not be empty, it is a required field';
        }
        return this.createForm.controls.VATPercentage.hasError('pattern')
          ? 'Invalid VAT value: VAT must be a number'
          : '';
    }
  }
}
