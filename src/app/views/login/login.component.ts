import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RouterModule , Router } from '@angular/router';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { SERVER_API_URL } from '../../app.constants';
import Login   from '../..//shared/login';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {


    loginForm: FormGroup;
    serverErrors = [];
  
    // private auth: CommonAuthService, 
    constructor(private fb : FormBuilder , private http : HttpClient , private router: Router) { }
  
    ngOnInit() {
      this.loginForm = this.fb.group({
        'username' :'',
        'password'  :''
      });
    }
  
  
    // get email(){ return this.loginForm.get('email'); }
    // get password(){ return this.loginForm.get('password'); }
  
  
  
    login(){
      console.log("o");
      console.log(this.loginForm.getRawValue());
      
      //login for get token
      this.http.post(SERVER_API_URL + '/login/', this.loginForm.getRawValue()).subscribe(
        (response : Login) => {
          console.log(response);
          localStorage.removeItem('token');
          localStorage.setItem('token', response.token);

          
        
  
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          localStorage.removeItem('token');
          this.serverErrors = error.error;
          //console.log(this.serverErrors);
          this.router.navigate(['/login']);
  
        }
        );
    }
  
  
  
    ngOnDestroy() {
    }
  
  }
  
  
  