import { Component, OnInit } from '@angular/core';
import { ReportfaultService } from '../reportfault.service';

@Component({
  selector: 'app-createtype',
  templateUrl: './createtype.component.html',
  styleUrls: ['./createtype.component.scss']
})
export class CreatetypeComponent implements OnInit {

  constructor(public service: ReportfaultService) { }

  ngOnInit(): void {
    this.service.faultTypes = {
      FaultTypeID: 0,
      Description: ''
    }
    this.service.fTypeList = [];
  }

  onSubmit(){
    this.service.CreateFaultType(this.service.faultTypes).subscribe(res => {
      console.log(res)
      window.location.reload()
    })
  }

}
