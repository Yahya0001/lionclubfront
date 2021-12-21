import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ baseURL} from '../shared/baseURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import {Article } from '../shared/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  auth_token = localStorage.getItem('token');
  
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })

  constructor(private http :HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getArticle(): Observable <Array<Article>>{
    return this.http.get<Array<Article>>(baseURL+ 'articles')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  addArticle(data:any): Observable<any>{
    return this.http.post(baseURL+ 'article/add', data  , { headers: this.headers } );   
  }

  updateArticle(data:any , id:any): Observable<any>{
    return this.http.post(baseURL+ 'article/update/' + id , data , id  );   
  }

  deleteArticle(data:any): Observable<any>{
    return this.http.delete(baseURL+ "article/" + data ); 
  }

  }