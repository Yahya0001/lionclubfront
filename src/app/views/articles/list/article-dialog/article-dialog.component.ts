import { Component, OnInit , ViewChild,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {ArticleService} from '../../../../services/article.service';
import {Article} from '../../../../shared/article';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.scss']
})
export class ArticleDialogComponent implements OnInit {
 
  constructor( @Inject(MAT_DIALOG_DATA) public id, private archivesService: ArticleService , 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
 }

  ngOnInit(): void {
   //console.log(this.data)
  }

}
