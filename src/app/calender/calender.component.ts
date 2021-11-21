import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { AssetsService } from '../assets.service';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor(public dialog:MatDialog, private assetService:AssetsService) { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
  };
 

handleDateClick(event) {
 // console.log(event.date);
  this.assetService.eventDate.next(event.dateStr);
  this.dialog.closeAll();
}
  ngOnInit(): void {
  }

}
