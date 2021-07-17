// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';


import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { AfficheComponent } from './affiche.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    AfficheComponent,
    ModalDirective
  ]
})
export class ThemeModule { }
