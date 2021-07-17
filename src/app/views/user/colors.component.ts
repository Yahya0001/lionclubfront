import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { HttpClient } from "@angular/common/http";

import { profilesService } from '../../services/profiles.service';
import { profile,pole,image,group,permission,user } from '../../shared/profile';
@Component({
  templateUrl: 'colors.component.html',
  styleUrls: ['./colors.component.scss']
})


export class ColorsComponent implements OnInit {
  profilesservice: any;
  profile : profile[];
  constructor(private Profilesservice : profilesService,) {
    
   /*  this.profilesservice.createprofile()
    .subscribe(profile => this.profile.push(profile));  */
  };




  ngOnInit():void {
  }
   }
function createNewProfile ( id : number , username : string , first_name : string ,last_name : string ,gender : boolean ,email : string, password : string, groups : group[], Image : image,telephone : string,birthdate : Date ,poles : pole[]  )
 : user {
   return { id : id ,
           username : username ,
           first_name : first_name,
           last_name : last_name ,
           gender : gender,
           email :email,
           password : password ,
           groups : groups ,
           image : Image ,
           telephone : telephone,
           birthdate : birthdate ,
           poles : poles };
 }

function ngOnInit() {
  throw new Error('Function not implemented.');
}

