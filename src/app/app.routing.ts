import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import{ EventComponent} from './event/event.component'; 

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { TaskComponent } from './views/tasks/task/task.component';
import { DialComponent } from './dial/dial.component';
import { ProjetComponent } from './views/projet/projet.component';
import { ProqComponent } from './views/projet/proq/proq.component';
import { ProfileComponent } from './views/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'dial',
    component: DialComponent,
    data: {
      title: 'dial'
    }
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [


      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile Page'
        }
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
       {
        path: 'event',
        component: EventComponent,
        data: {
          title: 'Events Page'
        }
       },
       
     
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./views/user/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetssModule)
      },
      {
        path: 'tasks',
        component: TasksComponent,
        data: {
          title: 'Tasks'
        },
      },
      {
        path: 'tasks/:id',
        component: TaskComponent,
        data: {
          title: 'Tasks'
        }
      },
      {
        path: 'projet',
        component: ProjetComponent,
        data:{
          title: 'Projet'
        }
      },{
        path:'projet/:name',
        component: ProqComponent,
        data:{
          title: 'Proqs'
        }
      },
      
    ]
  },
  { path: '**', component: P404Component }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}