import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { Events } from '../../../shared/events';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventsService } from '../../../services/events.service'
import response from '../../../shared/response';

@Component({
  selector: 'app-my-dialog3',
  templateUrl: './my-dialog3.component.html',
  styleUrls: ['./my-dialog3.component.scss']
}) 

export class MyDialog3Component implements OnInit {

  public message!: string;
  public eventForm!: FormGroup;
  public loading = false;
  public success = false; 
  public error = false;
  public show = false;
  id : any ;
  
  constructor(private eventservice : EventsService , private fb : FormBuilder , public dialogRef: MatDialogRef<MyDialog3Component>,
    @Inject(MAT_DIALOG_DATA) public data: Events) {
      this.id = this.data.id;
    }


  ngOnInit(): void {
    this.eventForm = this.fb.group({
      'title' : this.data.title,
      'description': this.data.description,
      'date': this.data.date,
      'type': this.data.type,
      'place': this.data.place,
      'document': '',
    });
  }

  public imageChange(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.eventForm.patchValue({
      document: file
    });
    this.eventForm.get('document').updateValueAndValidity();

    
  }

  add(){
    this.loading = true;
    var formData = new FormData();
 
    formData.append("title", this.eventForm.get('title').value);
    formData.append("description", this.eventForm.get('description').value);
    formData.append("date", this.eventForm.get('date').value);
    formData.append("type", this.eventForm.get('type').value);
    formData.append("place", this.eventForm.get('place').value);
    formData.append("document", this.eventForm.get('document').value);


    
    this.eventservice.updateEvents(formData , this.id).subscribe((response : response) => {
      this.loading = false;
     
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