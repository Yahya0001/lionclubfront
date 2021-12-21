import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { profilesService } from '../../../services/profiles.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import bureau from '../../../shared/bureau';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.scss']
})
export class AdmineditComponent implements OnInit {

  public upgrateUser!: FormGroup;
  public loading = false;
  public success = false; 
  public error = false;

  constructor(private fb : FormBuilder , public dialogRef: MatDialogRef<AdmineditComponent>,private upgradeservice: profilesService ,  @Inject(MAT_DIALOG_DATA) public data: bureau) { }

  ngOnInit():void {
    this.upgrateUser = this.fb.group({
      'year'  :'',
      'post' :'',
      'quote' :''
    });
  }

  add(){
    this.loading = true;
    var formData = new FormData();
    formData.append("year", this.upgrateUser.get('year').value);
    formData.append("post", this.upgrateUser.get('post').value);

    console.log(this.upgrateUser.getRawValue());
    this.upgradeservice.updateMembre(formData ).subscribe((response : any) => {
      this.loading = false;
     // console.log(response);
      if ( response.message == "success" ){
        this.success = true; 
        this.error = false; 
        this.dialogRef.close();
      }else{
        this.success = false; 
        this.error = true; 
      }
    } , 
    (error : any) => {
      this.success = false; 
      this.loading = false;
      this.error = true; 
    }) ; 
  }

}
