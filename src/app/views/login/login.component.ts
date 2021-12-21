import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RouterModule , Router } from '@angular/router';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { SERVER_API_URL } from '../../app.constants';
import Login   from '../../shared/login';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {


    loginForm: FormGroup;
    public loading = false;
    public message = false;

    serverErrors = [];
  
    // private auth: CommonAuthService, 
    constructor(private fb : FormBuilder , private http : HttpClient , private router: Router,private auth : AuthService) { }
  
    ngOnInit() {
      this.loginForm = this.fb.group({
        'email' :'',
        'password'  :''
      });
    }
  
  
    // get email(){ return this.loginForm.get('email'); }
    // get password(){ return this.loginForm.get('password'); }
  
  
  
    login(){

      this.loading = true ;
      //login for get token
      this.http.post(SERVER_API_URL + '/login/', this.loginForm.getRawValue()).subscribe(
        (response : Login) => {
          //console.log(response);
          if( response.access_token != "0" ){
          localStorage.removeItem('token');
          localStorage.setItem('token', response.access_token);
          this.auth.getUserData( response.access_token);
          this.router.navigate(['/dashboard']);
          this.loading = false;

        }else
          this.message = true;
          this.loading = false;

        },
        (error) => {
          localStorage.removeItem('token');
          this.serverErrors = error.error;
         // console.log(this.serverErrors);
          //this.router.navigate(['/login']);
  
        }
        );
    }
  
  
  
    ngOnDestroy() {
    }
  
  }
  
  
  