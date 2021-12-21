

import { Component, OnInit  } from '@angular/core';

import {Article} from '../../../shared/article';
import {Subject} from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ArticleService} from '../../../services/article.service';
import { ArticleDialogComponent } from './article-dialog/article-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { webURL } from '../../../shared/baseURL';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  url = webURL ;

  displayedColumns: any = ['image', 'title', 'date', 'actions'];
  listArticle: Array<Article>;
  constructor(private articleService: ArticleService  , public dialog: MatDialog ) {
   this.listArticle = new Array<Article>(); 

 
  }
  
  ngOnInit(): void {
    this.articleService.getArticle()
    .subscribe(result => {
      this.listArticle = result;
    });
  }
 
  openArticleDialog(id): void {
    
   const dialogRef = this.dialog.open(ArticleDialogComponent,{
     width: '850px',
     data: this.listArticle.find((s) => s.id === id)
   });

  }



  openDeleteDialog(id): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      data: id,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("hi");
       setTimeout(() => {
          this.ngOnInit();
      }, 400);
     });
  }

  openEditDialog(id): void {
    const dialogRef = this.dialog.open(EditDialogComponent,{
      data: this.listArticle.find((s) => s.id === id) 
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("hi");
       setTimeout(() => {
          this.ngOnInit();
      }, 400);
     });
  }

}

