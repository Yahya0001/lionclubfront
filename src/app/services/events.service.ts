import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ baseURL} from '../shared/baseURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import {Events , Archive } from '../shared/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  auth_token = localStorage.getItem('token');
  
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })

  constructor(private http :HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getEvents(): Observable <Array<Events>>{
    return this.http.get<Array<Events>>(baseURL+ 'event')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  addEvents(data:any): Observable<any>{
    return this.http.post(baseURL+ 'event/add', data  , { headers: this.headers } );
  }

  updateEvents(data:any , id:any): Observable<any>{
    return this.http.post(baseURL+ 'event/update/' + id , data , id );
  }

  getArchives(): Observable<Array<Archive>>{
    return this.http.get<Array<Archive>>(baseURL+'event/')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  deleteEvent(data:any): Observable<any>{
    return this.http.delete(baseURL+ "event/" + data ); 
  }

  }
