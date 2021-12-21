import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { Document } from '../../../shared/document';
import { DocumentsService } from '../../../services/documents.service'
import response from '../../../shared/response'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddArchiveComponent implements OnInit {

  public message!: string;
  public documentForm!: FormGroup;
  public loading = false;
  public success = false; 
  public error = false;
  public show = false;
  public imagePath : any;
  imgURL: any ;
  
  constructor(private documentservice : DocumentsService , private fb : FormBuilder ) {
  }


  ngOnInit(): void {
    this.documentForm = this.fb.group({
      'title' : '',
      'date': '',
      'document' : '',
    });
  }

  public imageChange(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.documentForm.patchValue({
      document: file
    });
    this.documentForm.get('document').updateValueAndValidity();

    
  }

  add(){
    this.loading = true;
    var formData = new FormData();
    formData.append("title", this.documentForm.get('title').value);
    formData.append("document", this.documentForm.get('document').value);
    formData.append("date", this.documentForm.get('date').value);

    console.log(this.documentForm.getRawValue());
    this.documentservice.addDocument(formData).subscribe((response : any) => {
      this.loading = false;
      console.log(response);
      // if ( response.message == "success" ){
      //   this.success = true; 
      //   this.error = false; 
      // }else{
      //   this.success = false; 
      //   this.error = true; 
      // }
    } , 
    (error : any) => {
      this.success = false; 
      this.loading = false;
      this.error = true; 
    }) ; 
  }

}
