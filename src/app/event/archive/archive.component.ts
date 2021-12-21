import { Component, OnInit ,  Inject, Injectable } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {Archive} from '../../shared/events';
import {Subject} from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventsService} from '../../services/events.service';

import{MyDialogComponent} from './my-dialog/my-dialog.component';
import{MyDialog2Component} from './my-dialog2/my-dialog2.component';
import{MyDialog3Component} from './my-dialog3/my-dialog3.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  displayedColumns: any = ['position', 'nom', 'nature', 'date', 'lieu', 'actions'];
  listArchive: Array<Archive>;
  constructor(private archivesService: EventsService  , public dialog: MatDialog ) {
   this.listArchive = new Array<Archive>(); 

 
  }
  
ngOnInit(): void {
    this.archivesService.getArchives()  
    .subscribe(result => {
      this.listArchive = result;
    });
  }
 
  openDialog(id): void {
    
   // console.log(id);
    const dialogRef = this.dialog.open(MyDialogComponent,{
      width: '850px',
      data: this.listArchive.find((s) => s.id === id)
    });

    //dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    ////});
  }


  openDialog2(id): void {
    const dialogRef = this.dialog.open(MyDialog2Component,{
      data: id
    });
    

     dialogRef.afterClosed().subscribe(result => {
      // console.log("hi");
       setTimeout(() => {
          this.ngOnInit();
      }, 400);
     });
  }

  openDialog3(id): void {
    const dialogRef = this.dialog.open(MyDialog3Component,{
      data: this.listArchive.find((s) => s.id === id)
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("hi");
       setTimeout(() => {
          this.ngOnInit();
      }, 400);
     });
  }

}
