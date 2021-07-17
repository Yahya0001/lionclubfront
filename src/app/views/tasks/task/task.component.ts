import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataService } from '../data.service';
import { ITask, IProfile, IFile, IProject } from '../interfaces';
import { profiles } from '../constants';

const imgBaseUrl = '../../../../assets/img/';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  currId: number;
  currTask: ITask;
  taskDeleted: boolean;
  projectTitle: string;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.taskDeleted = false;
    this.projectTitle = '';
  }

  ngOnInit(): void {
    this.currId = +this.route.snapshot.paramMap.get('id');
    this.dataService.getTask(this.currId).subscribe((tsk: ITask) => {
      this.currTask = tsk;
      this.dataService.getProject(this.currTask.project).subscribe((prjct: IProject) => this.projectTitle = prjct.name);
    });
  }

  markAsCompleted(): void {
    this.dataService.markTaskCompleted(this.currTask).subscribe((tsk: ITask) => this.currTask.status = "Completed");
  }

  deleteTask(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.currTask;
    const dialogRef = this.dialog.open(DeleteTaskDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.deleteTask(result.id).subscribe();
        this.taskDeleted = true;
      }
    });
  }

  editTask(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.currTask;
    const dialogRef = this.dialog.open(EditTaskDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.updateTask(result).subscribe((task: ITask) => {
          this.currTask = task;
        });
      }
    });
  }

}


@Component({
  selector: 'delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html'
})
export class DeleteTaskDialog{

  constructor(@Inject(MAT_DIALOG_DATA) public data: ITask, 
    public dialogRef: MatDialogRef<DeleteTaskDialog>){ }

  proceedWithDeleting(){
    this.dialogRef.close(this.data);
  }
}

@Component({
  selector: 'edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['../dialog-content-example-dialog.scss']
})
export class EditTaskDialog{

  currTask: ITask;
  deadline: Date;
  users = profiles;
  profs: IProfile[];
  status: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ITask, 
              public dialogRef: MatDialogRef<EditTaskDialog>){
    this.currTask = this.data;
    this.profs = this.currTask.users;
    this.deadline = this.currTask.deadline;
    this.status = this.currTask.status;
  }

  proceedWithEditing(){
    // console.log(this.currTask);
    if(this.deadline)
      this.currTask.deadline = this.deadline;
    this.currTask.status = this.status;
    this.currTask.users = this.profs;
    this.dialogRef.close(this.currTask);
  }
}