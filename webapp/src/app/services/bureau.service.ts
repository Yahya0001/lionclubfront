import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ baseURL} from '../shared/baseURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class BureauService {

  auth_token = localStorage.getItem('token');
  
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })

  constructor(private http :HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }


  addBureau(data:any): Observable<any>{
    return this.http.post(baseURL+ 'bureau/store', data  , { headers: this.headers } );   
  }


  }