import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ baseURL} from '../shared/baseURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import {Dashbord } from '../shared/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http :HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getData(): Observable <Dashbord>{
    return this.http.get<Dashbord>(baseURL+ 'home')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
 
  }