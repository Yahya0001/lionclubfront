import { Component, OnInit,ViewChild } from '@angular/core';
import { profilesService } from '../../services/profiles.service';
import { group, permission, profile,image,pole} from '../../shared/profile';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.scss']
})
export class AfficheComponent implements OnInit {
  listeProfiles : Array<profile>;
  profileNames : Array<string> ;
  
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  bool = true;
  profiles : profile[] ;
  profile : profile ;
  
  
  constructor( private Profilesservice : profilesService ) { 
     this.listeProfiles= new Array <profile>();
     this.profileNames = [] ;
     this.profiles = [] ;
     

    //  this.Profilesservice.getProfiles()
    // .subscribe((result) =>{ this.listeProfiles = result ;
    
    //   });
    }

  
  ngOnInit(): void {
   }
 //getProfileName(profileID : number) {
 //  let pro = this.profiles.filter((profile : profile)=> profile.id === profileID)
  // if (pro && pro.length) return ( pro[0].first_name + pro[0].last_name) ;
  //}
removeProfile(idprofile : number){
  return this.Profilesservice.deleteProfile(idprofile)
}
updateProfile(id : number){

 return this.Profilesservice.updateProfile(id)
}


} 
  
 
