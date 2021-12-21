// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';


import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { AfficheComponent } from './affiche.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdmineditComponent } from './adminedit/adminedit.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    AfficheComponent,
    ModalDirective,
    DeleteuserComponent,
    AdmineditComponent
  ]
})
export class ThemeModule { }
