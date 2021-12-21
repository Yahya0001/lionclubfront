import {
  Component,
  ChangeDetectionStrategy,
  ViewChild, OnInit,
  TemplateRef,Inject ,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MyDialogComponent} from '../../my-dialog/my-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EventsService} from '../../services/events.service';
import {Events } from '../../shared/events';
import { reduce } from 'rxjs/operators';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {
 @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;

  };
 

  refresh: Subject<any> = new Subject();



  events: CalendarEvent[] = [


  
  ];

  activeDayIsOpen: boolean = true;
  listEvents: Array<Events>;
  tmpEvent: Array<any>;

  constructor(private modal: NgbModal ,private eventsService: EventsService,public dialog: MatDialog) {
      this.listEvents = new Array<Events>();
  }

  ngOnInit():void {
    this.tmpEvent = [];
    this.eventsService.getEvents()
    .subscribe(result=>{
      console.log(this.events);

      result.forEach(element => {
        console.log(element);
        this.tmpEvent.push({
          start: Date.parse(element.date),
          end:  Date.parse(element.date),
          title: element.title + " ( " + element.description +" ) ",
          color: colors.red,
          //actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          draggable: true
        });
      });
      this.events=this.tmpEvent; 
    console.log(this.events);  })
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

}




