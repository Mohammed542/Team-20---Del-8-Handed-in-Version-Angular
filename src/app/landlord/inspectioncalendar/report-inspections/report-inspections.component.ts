import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-report-inspections',
  templateUrl: './report-inspections.component.html',
  styleUrls: ['./report-inspections.component.scss']
})
export class ReportInspectionsComponent implements OnInit {
  form: FormGroup;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Date', 'StartTime', 'EndTime', 'InspectionType', 'Building', 'Unit', 'Status', 'Comment'];

  constructor(private mainService: MainService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      startdate: [new Date(), Validators.required],
      enddate: [new Date(new Date().setDate(new Date().getDate() + 1)), Validators.required],
    });
  }

  generate() {
    const obj = {
      LandlordID: +sessionStorage.getItem('LandlordID'),
      StartDate: this.datePipe.transform(this.form.controls.startdate.value, 'MM/dd/yyyy'),
      EndDate: this.datePipe.transform(this.form.controls.enddate.value, 'MM/dd/yyyy'),
    }
    this.mainService.getInspectionReportData(obj).subscribe((response: any) => {
      if(response.Success) {
        this.dataSource.data = response.Result;
        this.dataSource.sort = this.sort;
      } else {

      }
    });
  }

  downloadPdf(): void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 210;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('Inspection-Report.pdf');
    });
  }
}
