import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-my-dialog2',
  templateUrl: './my-dialog2.component.html',
  styleUrls: ['./my-dialog2.component.scss']
})
export class MyDialog2Component implements OnInit {

  constructor(public eventservice:EventsService , public dialogRef: MatDialogRef<MyDialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    //console.log(this.data)

  }

  delete(){
    this.eventservice.deleteEvent(this.data)  
    .subscribe(result => {
    // console.log("hi , im deleting " , this.data);
    });
    this.dialogRef.close();
  }
}
