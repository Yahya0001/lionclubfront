import { Component, OnInit } from '@angular/core';
import { Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { MatTable } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { analyzeAndValidateNgModules, ThisReceiver } from '@angular/compiler';
import { DialComponent } from '../../dial/dial.component';

import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import * as Projects from '../bind/Projects.json';
//import { Project } from './project';
import { stringify } from '@angular/compiler/src/util';
import { isYesterday } from 'date-fns';

import { AfterViewInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';



export interface ProjectElement {
  id: number;
  title: string;
  pole: number;
  Leader: string;
  statut: string;
}

let ELEMENT_DATA: ProjectElement[] = [];

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent{

  displayedColumns: string[] = ['position', 'name','pole', 'Leader', 'statut','actions'];

  bdb: any[] = Projects.Projects;
  event: ProjectElement;
 
  constructor(public dialog: MatDialog) { }
  //public dataSource = new MatTableDataSource(ELEMENT_DATA);
  isCollapsed: boolean = false;
  public dbdd = new MatTableDataSource(Projects.Projects);


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    ///dialogConfig.data = ELEMENT_DATA.data;
    dialogConfig.width = "800px";
    dialogConfig.height = "80%";
    const dialogRef = this.dialog.open(DialogContentExampleDialog, dialogConfig);
  }

  seeMore() {
    const dialogConfigg = new MatDialogConfig();
    //dialogConfigg.data = ELEMENT_DATA.data;
    dialogConfigg.width = "800px";
    dialogConfigg.height = "80%";
    const dialogReffc = this.dialog.open(DetailDialog, dialogConfigg);
  }



  /// delete event

  deleteEvent(eventToDelete: ProjectElement) {
    let i = ELEMENT_DATA.findIndex(e => e.id === eventToDelete.id)
    if(confirm("Are you Sure you want to delete?")){
      Projects.Projects.splice(i,1);
      this.dbdd = new MatTableDataSource(Projects.Projects);
    }
  }

  /// date exprired?
  expiredT: boolean;
  expiredN: boolean;
  expired(dat: string){
    var d = new Date();
    var yy = d.getFullYear();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    var m ="";
    var da ="";
    if(mm<10){
      m = "0" + mm.toString();
    }
    else{
      m = mm.toString();
    }
    if(dd<10){
      da = "0" + dd.toString();
    }
    else{
      da = dd.toString();
    }
    var hh = dat[0]+dat[1];
    var gg = dat[3]+ dat[4];
    var jj = dat[6]+ dat[7]+ dat[8]+ dat[9];
    var dfd = jj+"-"+gg+"-"+hh;
    var res = yy.toString()+"-"+m+"-"+da;

    if(dfd>res){
      this.expiredN = false;
      this.expiredT= false;
      return "pending";
    }
    else if(dfd===res){
      this.expiredT= true;
      this.expiredN=false;
      return "today is the deadline";
    }
    else{
      this.expiredN=true;
      this.expiredT= false;
      return "expired";
    }
  }

  /// traduction de titre
  getPoleTitle(n: string){
    if(n==="1"){
      return "Pole projet";
    } 
    else if(n==="2"){
      return "Dev. Commerciale";
    }
    else if(n==="3"){
      return "Pole Marketing & Comm.";
    }
    else if(n==="4"){
      return "Pole RH";
    }
    else{
      return "Not found";
    }
  }

  
  /// apply filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dbdd.filter = filterValue.trim().toLowerCase();
  }
  
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
   // console.log(event);
  }
    
  gett(dat: string){
    if(this.expired(dat))
      if(this.expiredT){
        return "warning";
      }
      else if(this.expiredN){
        return "danger";
      }
      else if(!this.expiredN){
        return "success";
      }
    else{
      if(this.expiredT){
        return "warning";
      }
      else if(this.expiredN){
        return "danger";
      }
      else if(!this.expiredN){
        return "success";
      }
    }
  }
}


@Component({
  selector: 'dialog-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css']
})
export class DialogContentExampleDialog {
  constructor(public dialogRef: MatDialogRef<any>) { }

  closeDialog(){
    this.dialogRef.close();
  }  
}

@Component({
  selector: 'detail-dialog',
  templateUrl: './detail-dialog.html',
  styleUrls: ['./dialogd.css']
})
export class DetailDialog {
  constructor(public dialogRef: MatDialogRef<any>) { }

  closeDialog(){
    this.dialogRef.close();
  }  
}

