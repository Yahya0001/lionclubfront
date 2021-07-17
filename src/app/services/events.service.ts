import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ baseURL} from '../shared/baseURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import {Events } from '../shared/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http :HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getEvents(): Observable <Array<Events>>{
    return this.http.get<Array<Events>>(baseURL+ 'events')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }


  }
