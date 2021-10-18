import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MainService } from 'src/app/main.service';

@Component({
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss']
})
export class ViewAccountComponent implements OnInit {
  checked = false;
  toggle = "Show ID Number";
  TenantProfile : any;
  constructor(private router: Router, private service: MainService, private dialog: MatDialog) { }

  ngOnInit(): void {
    let TenantID = sessionStorage['TenantID'];
    this.service.getTenantProfile(TenantID).subscribe(res => {
      this.TenantProfile = res;
    });
  }

  onClick(){
    this.router.navigateByUrl('tenant/home')
  }
  
  onEdit(id){
      localStorage.setItem('TenantID', id.TenantID);
      console.log(id);
      console.log(id.TenantID);
      this.router.navigateByUrl("tenant/viewprofile/edit");
    
  }
  handleChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.toggle = "Hide ID Number"
      this.checked = true;
    }
    else {
      this.toggle = "Show ID Number"
      this.checked = false;
    }
  }

}
