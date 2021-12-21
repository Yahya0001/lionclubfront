import { Component, OnInit  } from '@angular/core';

import {DocumentList , Document} from '../../../shared/document';
import {Subject} from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DocumentsService} from '../../../services/documents.service';

import {DeleteComponent} from '../delete/delete.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListArchiveComponent implements OnInit {

 
  listDocument: DocumentList;
  Documents: Array<Document>;
  title : string;
  constructor(private documentService: DocumentsService  , public dialog: MatDialog ) { 
    
    this.title = "";
  }
  
  ngOnInit(): void {

    this.getData(1);
  }

  search(title:string){
    this.documentService.searchDocument({title : this.title})
    .subscribe(result => {
      this.listDocument =result;
      this.Documents =result.data;
    });
  }
  getData(page:any){
    this.documentService.getDocument(page)
    .subscribe(result => {
      this.listDocument = result;
      this.Documents = result.data;

      
    });
  }

  openDeleteDialog(id): void {
    const dialogRef = this.dialog.open(DeleteComponent,{
      data: id,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("hi");
       setTimeout(() => {
          this.ngOnInit();
      }, 400);
     });
  }


}


