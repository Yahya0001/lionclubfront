import { Component, OnInit  } from '@angular/core';
import { SERVER_URL} from '../../app.constants';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { profilesService } from '../../services/profiles.service';
import response from '../../shared/response';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hide = true;
  hideNewPassword = true;
  editMode = false;
  defaultBirthdate: Date;
  public imagePath : any;
  public message!: string;
  public user : any;
  public url = SERVER_URL;
  imgURL: any ;
  bureau : any ;
  public passShow = true ;

  public updateUser: FormGroup;
  public loading = false;
  public success = false; 
  public error = false;
  public show = false;

  public releaseDate;

  constructor(private profileservice : profilesService , private fb : FormBuilder , private http : HttpClient ) {
    this.defaultBirthdate = new Date(1999, 0, 1);
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')) ;
    this.imgURL = this.url + this.user.photo ;

    this.user.phone="54361148";
    this.bureau = JSON.parse(localStorage.getItem('bureau')) ;
    console.log(this.user.birthday);

    if (this.user.type == 2){
      this.updateUser = this.fb.group({
      'name'  : this.user.name,
      'email' : this.user.email,
      'phone' : '54361148',
      'photo' : '',
      'birthday' : this.user.birthday,
      'password' :'',
      'corrent_password' : '',
      'quote' : this.bureau.quote,
    });}
    else{
      this.updateUser = this.fb.group({
      'name'  : this.user.name,
      'email' : this.user.email,
      'phone' : '54361148',
      'photo' : '',
      'birthday' : this.user.birthday,
      'password' :'',
      'corrent_password' : '',
       }
      );
    }
  }

  public imageChange(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.updateUser.patchValue({
      photo: file
    });
    this.updateUser.get('photo').updateValueAndValidity();


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

  edit(){
    this.loading = true;
    var formData = new FormData();


    formData.append("name", this.updateUser.get('name').value);
    formData.append("email", this.updateUser.get('email').value);
    formData.append("phone", this.updateUser.get('phone').value);
    formData.append("photo", this.updateUser.get('photo').value);
    formData.append("birthday", this.updateUser.get('birthday').value);
    formData.append("password", this.updateUser.get('password').value);
    formData.append("corrent_password", this.updateUser.get('corrent_password').value);
    if (this.user.type == 2){formData.append("quote", this.updateUser.get('quote').value);}
    //console.log(this.updateUser.getRawValue());

    
    this.profileservice.updateProfile(formData).subscribe((response : any) => {
      this.loading = false;
      //console.log(response);
      // if ( response.message == "success" ){
      //   this.success = true; 
      //   this.error = false; 
      //   this.editMode = true;
      // }else{
      //   this.success = false; 
      //   this.error = true; 
      // }


      localStorage.removeItem('user');
      localStorage.removeItem('bureau');
      localStorage.setItem('user',  JSON.stringify(response.user));
      localStorage.setItem('bureau',  JSON.stringify(response.bureau));
      setTimeout(() => {
        this.ngOnInit();
    }, 500);
    } , 
    (error : any) => {
      this.success = false; 
      this.loading = false;
      this.error = true; 
    }) ; 
  }
  startEditing(): void{
    this.editMode = true;
  }

  exitEditing(): void{
    this.editMode = false;
  }

  onSelectFile(event:any) {
    
  }

}
