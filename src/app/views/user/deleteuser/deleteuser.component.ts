import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {

  constructor(public userservice:AuthService , public dialogRef: MatDialogRef<DeleteuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  delete(){
    this.userservice.deleteUser(this.data)  
    .subscribe(result => {
    // console.log("hi , im deleting " , this.data);
    });
    this.dialogRef.close();
  }

  exit(){
    this.dialogRef.close();
  }

}
