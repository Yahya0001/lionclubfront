import { Injectable } from '@angular/core';
import { Router,RouterStateSnapshot,ActivatedRouteSnapshot  } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
	
  loggedIn = false;

  constructor(private router: Router){}
  
  isAuthonticated(){
	const promise = new Promise(
		(resolve,reject) => {
			setTimeout(() => {

		if(localStorage.getItem('token')){
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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean { 
  	return this.isAuthonticated().then(
  		(authSuccess: boolean) => {
			//   console.log(authSuccess);
  			if(authSuccess){
  				return  true;
  			}else{
  				this.router.navigate(['/login']);
  			}
  	}).catch(e =>  this.router.navigate["/login"]);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{
  	return this.canActivate(route, state);
  }
}