import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { HttpClient } from "@angular/common/http";

import { profilesService } from '../../services/profiles.service';
import { profile,pole,image,group,permission,user } from '../../shared/profile';
import { RouterModule , Router } from '@angular/router';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { SERVER_API_URL } from '../../app.constants';
import Login   from '../../shared/login';

@Component({
  templateUrl: 'colors.component.html',
  styleUrls: ['./colors.component.scss']
})



export class ColorsComponent implements OnInit {
  profilesservice: any;
  profile : profile[];

  createUser: FormGroup;
  serverErrors = [];
  private fileName;
  public success = false; 
  public error = false; 
  public loading = false;
  public imagePath : any;
  imgURL: any ;
  

  constructor(private Profilesservice : profilesService,private fb : FormBuilder , private http : HttpClient , private router: Router) {
    
   /*  this.profilesservice.createprofile()
    .subscribe(profile => this.profile.push(profile));  */

    this.imgURL = "assets/img/avatars/new_profile.jpg" ;
  };



  ngOnInit():void {
    this.createUser = this.fb.group({
      'name'  :'',
      'type' :'',
      'email' :'',
      'phone' :'',
      'photo' :'',
      'birthday' :'',
      'password' :''
    });
  }

  public imageChange(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.createUser.patchValue({
      photo: file
    });
    this.createUser.get('photo').updateValueAndValidity();

    // bch image tetbadel ki ta5tar image jdida
    if (event.target.files.length > 0){
      const file = event.target.files[0];
     // this.f['profile'].setValue(file);
 
 
       var reader = new FileReader();
    
       this.imagePath = file;
       reader.readAsDataURL(file); 
       reader.onload = (_event) => { 
         this.imgURL = reader.result; 
      }
    }
  }

  create(){
    // console.log("ok");
    // console.log(this.courseForm.getRawValue());
    // console.log({'courseForm': this.courseForm});
    this.loading = true;
    const formData = new FormData();
    // this.formData.append('course' , this.fileName );
    formData.append("name", this.createUser.get('name').value);
    formData.append("type", this.createUser.get('type').value);
    formData.append("email", this.createUser.get('email').value);
    formData.append("phone", this.createUser.get('phone').value);
    formData.append("photo", this.createUser.get('photo').value);
    formData.append("birthday", this.createUser.get('birthday').value);
    formData.append("password", this.createUser.get('password').value);
     console.log(this.createUser.getRawValue());
    // console.log({'coursrform . value': this.courseForm.getRawValue()});
    
    this.Profilesservice.addProfile(formData).subscribe((response : any) => {
     // console.log(response);
     if ( response.message == "success" ){
      this.success = true; 
      this.error = false; 
      this.loading = false;
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
