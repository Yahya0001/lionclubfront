import { Component, OnInit , ViewChild,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {Archive} from '../../../shared/events';
import {DataSource} from '@angular/cdk/collections';
import { isConstructSignatureDeclaration } from 'typescript';
import { webURL } from '../../../shared/baseURL'

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  url = webURL;
  
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {   
 }

  ngOnInit(): void {
    console.log(this.data)
  }

}
