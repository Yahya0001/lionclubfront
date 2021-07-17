import { Injectable } from '@angular/core';
import { tobeadd } from '../bind/bind';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Project } from '../projet/project';


  /*
  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  enroll(user: tobeadd){
    return this._http.post<any>(this._url,user)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}*/

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
  export class AddingService { //dataservice

    constructor(private http: HttpClient) { }


    getProject(name: string): Observable<Project>{
      return this.http.get<Project[]>(ProjectsURL+'/projet').pipe(
        map((projects: Project[]) => {
          let project = projects.filter((prjct: Project) => prjct.name == name);
          return (project && project.length) ? project[0] : null;
        }),
        catchError(this.handleError)
      );
    }

    addProject(pr: Project): Observable<Project>{
      return this.http.post<Project>(baseURL + '/projet', pr, httpOptions).pipe(
        catchError(this.handleError)
      );
    }

    deleteProject(name: string): Observable<{}>{
      const url = baseURL + '/projet/' + name;
      return this.http.delete(url, httpOptions).pipe(
        catchError(this.handleError)
      );
    }

    updateProject(pr: Project): Observable<Project>{
      return this.http.put<Project>(baseURL + '/projet/' + pr.name, pr, httpOptions).pipe(
        catchError(this.handleError)
      );
    }


    private handleError(error: any){
      console.error('Server Error: ', error);
      if(error.error instanceof Error){
        const errorMessage = error.error.message;
        return Observable.throw(errorMessage);
      }
      return Observable.throw(error || "Node.js server error");
    }

}