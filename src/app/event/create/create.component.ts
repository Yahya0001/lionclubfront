import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { Events } from '../../shared/events';
import { EventsService } from '../../services/events.service'
import response from '../../shared/response'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public message!: string;
  public eventForm!: FormGroup;
  public loading = false;
  public success = false; 
  public error = false;
  public show = false;
  
  constructor(private eventservice : EventsService , private fb : FormBuilder ) { }


  ngOnInit(): void {
    this.eventForm = this.fb.group({
      'title' : '',
      'description': '',
      'date': '',
      'type': '',
      'place': '',
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
  //  console.log(this.eventForm.get('title').value);
  //  console.log(this.eventForm.get('description').value);
   // console.log(this.eventForm.get('date').value);
    formData.append("title", this.eventForm.get('title').value);
    formData.append("description", this.eventForm.get('description').value);
    formData.append("date", this.eventForm.get('date').value);
    formData.append("type", this.eventForm.get('type').value);
    formData.append("place", this.eventForm.get('place').value);
    formData.append("document", this.eventForm.get('document').value);
    //console.log(this.eventForm.getRawValue());

    
    this.eventservice.addEvents(formData).subscribe((response : response) => {
      this.loading = false;
     // console.log(response.message);
      if ( response.message == "success" ){
        this.success = true; 
        this.error = false; 
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
