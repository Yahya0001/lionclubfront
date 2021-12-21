import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constants';
import  Membre   from '../shared/membre';
import { HttpClient, HttpResponse , HttpHeaders} from '@angular/common/http';
import { User } from '../shared/login'
import { baseURL } from '../shared/baseURL';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import {catchError} from 'rxjs/operators';

@Injectable({

  providedIn: 'root'
})
export class profilesService {
  
  auth_token = localStorage.getItem('token');
  
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })


  constructor(private http : HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  addProfile(data:any): Observable<any>{
    return this.http.post(SERVER_API_URL + '/register', data);
  }

  getProfiles(): Observable <Array<User>>{
    return this.http.get<Array<User>>(SERVER_API_URL+ '/members')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  
  updateProfile(data:any): Observable <any>{
    return this.http.post(SERVER_API_URL+ '/user/update' , data , { headers: this.headers })
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  updateMembre(data:any): Observable <any>{
    return this.http.post(SERVER_API_URL+ '/user/update' , data , { headers: this.headers })
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  
}
