import { Component, OnInit,ViewChild } from '@angular/core';
import { profilesService } from '../../services/profiles.service';
import { User} from '../../shared/login';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdmineditComponent } from './adminedit/adminedit.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.scss']
})

export class AfficheComponent implements OnInit {
  listeProfiles : Array<User>;
  profileNames : Array<string> ;

  pass = "1631837170";
  
  
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  bool = true;
  profiles : User[] ;
  profile : User ;
  public user : any;
  
  
  
  constructor( private Profilesservice : profilesService ,public dialog: MatDialog ) { 
     this.listeProfiles= new Array <User>();
     this.profileNames = [] ;
     this.profiles = [] ;
     
    }

    p: number = 1;
  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user')) ;


    //this.listeProfiles.paginator = this.paginator;
    this.Profilesservice.getProfiles()
      .subscribe((result) =>{ 
        
        this.listeProfiles = result ;
    
       });
   // console.log(this.listeProfiles);
   }

   openDeleteDialog(id){
    const dialogRef = this.dialog.open(DeleteuserComponent,{
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("hi");
       setTimeout(() => {
          this.ngOnInit();
      }, 400);
     });
   }
   openEditDialog(id){
    const dialogRef = this.dialog.open(AdmineditComponent,{
      data: this.listeProfiles.find((s) => s.id === id) 
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("hi");
       setTimeout(() => {
          this.ngOnInit();
      }, 400);
     });
   }
 


}