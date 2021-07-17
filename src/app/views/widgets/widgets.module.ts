import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsComponent } from './widgets.component';
import { WidgetssRoutingModule } from './widgets-routing.module';



@NgModule({
  imports: [
    WidgetssRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ WidgetsComponent ]
})
export class WidgetssModule { }

