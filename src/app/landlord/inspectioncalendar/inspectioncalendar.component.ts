import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { MainService } from 'src/app/main.service';
import { AddInspectionComponent } from './add-inspection/add-inspection.component';
import { UpdateInspectionComponent } from './update-inspection/update-inspection.component';
@Component({
  selector: 'app-inspectioncalendar',
  templateUrl: './inspectioncalendar.component.html',
  styleUrls: ['./inspectioncalendar.component.scss'],
})
export class InspectioncalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {};
  allBuildings: any;
  building: any;
  unitsList: any[] = [];
  selectUnit: any;
  inspectionTypes: any[];
  startTimes: any[] = [];
  inspections: any[] = [];
  constructor(public dialog: MatDialog,
    private mainService: MainService,
    private router: Router,
    private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.mainService.getInspections(+sessionStorage.getItem('LandlordID')).subscribe((response: any) => {
      if(response.Success) {
        this.inspections = response.Result.map(x => { return { title: x.Building + '\nUnit ' + x.Unit + '\n' + x.Tenant  + '\n' + (x.InspectionTypeID === 1 ? 'Take On' : 'Clear Out'), start: x.StartTime, end: x.EndTime, id: JSON.stringify(x) } });
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.handleDateClick.bind(this), // bind is important!
          events: this.inspections,
          eventClick: this.handleEventClick.bind(this),
          eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          }
        };
      } else {
        this.matSnackBar.open('Failed to get events', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  handleDateClick(arg) {
    this.dialog.open(AddInspectionComponent, {
      data: arg,
    }).afterClosed().subscribe(() => {
      this.setData();
    });
  }

  handleEventClick(arg) {
    this.dialog.open(UpdateInspectionComponent, {
      data: JSON.parse(arg.event.id),
    }).afterClosed().subscribe((response) => {
      if (response) {
        this.router.navigate(['inspection/complete', response])
      } else {
        this.setData();
      }
    });
  }
}
