import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hide = true;
  hideNewPassword = true;
  editMode = false;
  defaultBirthdate: Date;

  constructor() {
    this.defaultBirthdate = new Date(1999, 0, 1);
  }

  ngOnInit(): void {
  }

  startEditing(): void{
    this.editMode = true;
  }

  exitEditing(): void{
    this.editMode = false;
  }

}
