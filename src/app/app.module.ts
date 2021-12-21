import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { MatCheckboxModule } from '@angular/material/checkbox';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { INavData } from '@coreui/angular';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';







const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './containers';
import 'flatpickr/dist/flatpickr.css';
import {MatTabsModule} from '@angular/material/tabs';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,


  
} from '@coreui/angular';

import { AppRoutingModule } from './app.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { EventComponent } from './event/event.component';
import { TasksComponent, DialogContentExampleDialog } from './views/tasks/tasks.component';
import { TaskComponent, DeleteTaskDialog, EditTaskDialog } from './views/tasks/task/task.component';
import { DialComponent } from './dial/dial.component';
import { ProjetComponent } from './views/projet/projet.component';

import { ProfileComponent } from './views/profile/profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateComponent } from './event/create/create.component';
import { CalendrierComponent } from './event/calendrier/calendrier.component';
import { ArchiveComponent } from './event/archive/archive.component';
import {MyDialogComponent} from './event/archive/my-dialog/my-dialog.component';
import { MyDialog2Component } from './event/archive/my-dialog2/my-dialog2.component';
import { MyDialog3Component } from './event/archive/my-dialog3/my-dialog3.component';

import {CdkTableModule} from '@angular/cdk/table';
import { AddComponent } from './views/articles/add/add.component';
import { ListComponent } from './views/articles/list/list.component';
import { ArticleDialogComponent } from './views/articles/list/article-dialog/article-dialog.component';
import { EditDialogComponent } from './views/articles/list/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './views/articles/list/delete-dialog/delete-dialog.component';
import { AddArchiveComponent } from './views/documentsarchive/add/add.component';
import { ListArchiveComponent } from './views/documentsarchive/list/list.component';
import { DeleteComponent } from './views/documentsarchive/delete/delete.component';

@NgModule({
  imports: [
    MatDialogModule,
    CdkTableModule,
    MatFormFieldModule,
    NgxPaginationModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
   // MatFormFieldModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatChipsModule,

    /*IconModule,*/
    /*IconSetModule.forRoot(),*/
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide :DateAdapter, useFactory: adapterFactory,
    }),
    MatCheckboxModule,
    MatTabsModule
    ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    DialogContentExampleDialog,
    EventComponent,
    TaskComponent,
    DeleteTaskDialog,
    EditTaskDialog,
    DialogContentExampleDialog,
    DialComponent,
    ProjetComponent,
    MyDialogComponent,
    ProfileComponent,
    CreateComponent,
    CalendrierComponent,
    ArchiveComponent,
    MyDialog2Component,
    MyDialog3Component,
    AddComponent,
    ListComponent,
    ArticleDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    ListArchiveComponent,
    AddArchiveComponent,
    DeleteComponent,
    
    

    

  ],


    
    /* DialogContentExampleDialog,*/
    /*DialComponent,*/
    /*ProfileComponent*/
    
    
  //],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
   /* IconSetService,*/
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

