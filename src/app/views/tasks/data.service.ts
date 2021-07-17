import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ITask, IProject } from './interfaces';

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
export class DataService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]>{
    return this.http.get<ITask[]>(baseURL+'/tasks').pipe(
      catchError(this.handleError)
    );
  }

  getProjects(): Observable<IProject[]>{
    return this.http.get<IProject[]>(ProjectsURL+'/projects').pipe(
      catchError(this.handleError)
    );
  }

  getTask(id: number): Observable<ITask>{
    return this.http.get<ITask[]>(baseURL+'/tasks').pipe(
      map((tasks: ITask[]) => {
        let task = tasks.filter((tsk: ITask) => tsk.id === id);
        return (task && task.length) ? task[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  getProject(id: number): Observable<IProject>{
    return this.http.get<IProject[]>(ProjectsURL+'/projects').pipe(
      map((projects: IProject[]) => {
        let project = projects.filter((prjct: IProject) => prjct.id == id);
        return (project && project.length) ? project[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  addTask(task: ITask): Observable<ITask>{
    return this.http.post<ITask>(baseURL + '/tasks', task, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteTask(id: number): Observable<{}>{
    const url = baseURL + '/tasks/' + id.toString();
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateTask(task: ITask): Observable<ITask>{
    return this.http.put<ITask>(baseURL + '/tasks/' + task.id.toString(), task, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  markTaskCompleted(task: ITask): Observable<ITask>{
    task.status = "Completed";
    return this.http.put<ITask>(baseURL + '/tasks/' + task.id.toString(), task, httpOptions).pipe(
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
