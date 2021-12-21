import { Component, OnInit ,Inject } from '@angular/core';
import {DocumentsService} from '../../../services/documents.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(public documentservice:DocumentsService , public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  
  delete(){
   this.documentservice.deleteDocument(this.data)  
    .subscribe(result => {
    // console.log("hi , im deleting " , this.data);
    });
    this.dialogRef.close();
  }

  exit(){
    this.dialogRef.close();
  }

}
