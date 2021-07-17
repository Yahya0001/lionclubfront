import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http' ;

import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ProcessHTTPMsgService} from './process-httpmsg.service'
import { profile } from '../shared/profile';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  
  })
};
const baseURL = "http://localhost:3000";
const ProjectsURL = "http://localhost:4000";
@Injectable({

  providedIn: 'root'
})
export class profilesService {
  

  constructor(private http : HttpClient, private ProcessHTTPMsgService:ProcessHTTPMsgService) { }
getProfiles() :Observable< Array <profile>> {
  return this.http.get<Array<profile>>(baseURL+'/profiles')
  .pipe(catchError(this.ProcessHTTPMsgService.handleError));
}
getProfile(id : number ) : Observable<profile>{
  return this.http.get<Array<profile>>(baseURL+'/profiles').pipe(
    map((profiles : Array <profile>)=> {
      let profile = profiles.filter((prf : profile)=> prf.id == id);
      return (profile && profile.length) ? profile[0] : null ;
    }),
    catchError(this.ProcessHTTPMsgService.handleError));
  
}
createProfile(profile : profile) :Observable <profile>{
return this.http.post<profile>(baseURL+'/profiles/',httpOptions)
 .pipe(catchError(this.ProcessHTTPMsgService.handleError));
 }
deleteProfile(id : number) : Observable <{}> {
  const url =  baseURL + '/profiles/' + id.toString(); 
  return this.http.delete(url, httpOptions)

    .pipe(
      catchError(this.ProcessHTTPMsgService.handleError)

    );

}
updateProfile(id:number):Observable <profile>{
  return this.http.put<profile>(baseURL+'/profiles/',id.toString(),httpOptions).pipe(
    catchError(this.ProcessHTTPMsgService.handleError));
  

}

}
