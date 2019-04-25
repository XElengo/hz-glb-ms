import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
// import { CalenderMainComponent } from '../calender-main/calender-main.component';
@NgModule({
  declarations: [
    // CalenderMainComponent,
    ],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ],
  exports: [
    // CalenderMainComponent,
    ]
})
export class CalendarModule { }
