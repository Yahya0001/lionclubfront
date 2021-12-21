import { Component, OnInit , Inject } from '@angular/core';
import {ArticleService} from '../../../../services/article.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public articleservice:ArticleService , public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  delete(){
    this.articleservice.deleteArticle(this.data)  
    .subscribe(result => {
    // console.log("hi , im deleting " , this.data);
    });
    this.dialogRef.close();
  }

  exit(){
    this.dialogRef.close();
  }

}
