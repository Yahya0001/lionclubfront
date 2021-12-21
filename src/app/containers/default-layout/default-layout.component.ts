import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { SERVER_URL} from '../../app.constants';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public user : any;
  public url = SERVER_URL;
  imgURL : any ;
  public isAdmin = false;
  // private auth: CommonAuthService, 
  constructor(private router: Router ) { }
  
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')) ;
    this.imgURL = this.url + this.user.photo ;
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);

  }

}
