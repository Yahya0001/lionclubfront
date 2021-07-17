import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProject, ITask, IFile, IProfile } from './interfaces';
import { DataService } from './data.service';
import { groups, permissions, files, profiles, poles, comments, events, tasks, projects } from './constants';


/** Constants used to fill up our data base. */
let PROJECTS: string[] = [];



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'projectTitle', 'status', 'members', 'deadline', 'open'];
  dataSource: MatTableDataSource<ITask>;
  tasks: ITask[];
  projects: IProject[];
  projectTitles: string[];
  noTasks: boolean;
  

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private dataService: DataService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewTask(k + 1));
    this.noTasks = false;
    this.projects = [];
    this.projectTitles = [];
    this.dataService.getProjects().subscribe((projects) => {
      this.projects = projects;
      for (let i = 0; i < projects.length; i++)
        this.projectTitles.push(projects[i].name);
      PROJECTS = this.projectTitles;
    })
    this.dataService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.noTasks = tasks.length === 0;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.tasks);
      // this.obs = this.dataSource.connect();
      this.dataSource.sort = this.sort;
    });

  }



  ngAfterViewInit() {

  }

  getProjectTitle(projectId: number) {
    let cible = projects.filter((project: IProject) => project.id === projectId);
    if (cible && cible.length) return cible[0].name;
    return "Placeholder";
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.dataSource.data;
    //*dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(DialogContentExampleDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.addTask(result).subscribe((newTask: ITask) => {
          this.tasks.push(newTask);
          this.dataSource = new MatTableDataSource(this.tasks); /*
          this.dataService.getTask(newTask.id).subscribe((latestTask: ITask) => {
            this.dataSource.data.push(latestTask);
          }); */
        })
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


function createNewTaskFull(id: number,
  title: string,
  projectId: number,
  description: string,
  deadline: Date,
  users: IProfile[] = profiles,
  status: string = "pending",
  files_: IFile[] = [],
  user: IProfile = profiles[0],
): ITask {
  return {
    id: id,
    title: title,
    description: description,
    deadline: deadline,
    users: users,
    status: status,
    project: 1,
    user: user,
    files: files_,
    created_at: new Date()
  };
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content-example-dialog.scss']
})
export class DialogContentExampleDialog {
  projectTitles: Array<string> = PROJECTS;
  projectTitle: string;
  taskTitle: string;
  taskDeadline: Date;
  taskDescription: string;
  users = profiles;
  profs: IProfile[];
  status: string = "pending";
  constructor(@Inject(MAT_DIALOG_DATA) public data: ITask[],
    public dialogRef: MatDialogRef<DialogContentExampleDialog>) { }

  public onChange(event: any, newDate: any): void {
    // this.getData(newDate);
  }
  create(id: number, prjctId: number): void {
    this.dialogRef.close(createNewTaskFull(id, this.taskTitle, prjctId, this.taskDescription, this.taskDeadline, this.profs, this.status));
    //this.dialogRef.close(createNewTaskFull(id, this.taskTitle, prjctId, this.projectTitle, this.taskDescription, this.taskDeadline));
  }
}