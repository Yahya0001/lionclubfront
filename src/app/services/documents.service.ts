import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ baseURL} from '../shared/baseURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import { DocumentList } from '../shared/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  auth_token = localStorage.getItem('token');
  
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })

  constructor(private http :HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDocument(page = 1): Observable <DocumentList>{
    return this.http.get<DocumentList>(baseURL+ 'archive?page=' + page)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  searchDocument(data: any ,page =1 ):Observable <DocumentList>{
    return this.http.post<DocumentList>(baseURL + 'archive?page='+page , data , {headers: this.headers})
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  addDocument(data:any): Observable<any>{
    return this.http.post(baseURL+ 'archive/add', data  , { headers: this.headers } );   
  }

  deleteDocument(data:any): Observable<any>{
    return this.http.delete(baseURL+ "archive/" + data ); 
  }

 
  }