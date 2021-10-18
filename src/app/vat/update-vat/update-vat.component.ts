import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';  
import { VatService } from '../vat.service';

@Component({
  selector: 'app-update-vat',
  templateUrl: './update-vat.component.html',
  styleUrls: ['./update-vat.component.scss']
})
export class UpdateVatComponent implements OnInit {

  updateForm : any;

  constructor(private service: VatService, private formbulider: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage["UpdateVATID"])

    this.updateForm = this.formbulider.group({  
      VATPercentage: [+localStorage["UpdateVATValue"], [Validators.required]],  
    });  
  }

  vat(){
    this.router.navigate(["admin/vat"]);
  }

   async EditVATPercentage(event){
    await this.service.Edit(localStorage["UpdateVATID"], this.updateForm.controls.VATPercentage.value).subscribe((x)=>{
      console.log(x);
      this.router.navigate(["admin/vat"]);
    })
  }

}
