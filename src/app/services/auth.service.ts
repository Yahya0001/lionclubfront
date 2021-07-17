import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constants';
import  Member   from '../shared/membre';
import { HttpClient, HttpResponse , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loggedIn = false;
 
  constructor(private http : HttpClient  ,private  header : HttpHeaders ) {
      
   }

  getUserData(token) {
    this.header = new HttpHeaders().set('Authorization', `Token ${token}`);
    this.http.get(SERVER_API_URL + '/user/', { headers: this.header }).subscribe(
        (response : Member) => {
          console.log(response);
          localStorage.removeItem('user');
          localStorage.setItem('user',  JSON.stringify(response));

          return true;
        
  
        },
        (error) => {
          return false; 

        });
  }

  isAuthonticated(){
  	const promise = new Promise(
  		(resolve,reject) => {
  			setTimeout(() => {
          let t = localStorage.getItem('token');
          if(t){
            this.loggedIn = true;
            resolve(this.loggedIn);
          }else{
            this.loggedIn = false;
            reject();
          }
        },800);
  		});

  	return promise;
  }
}
