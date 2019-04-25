import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CalendarModule } from './calendar/calendar.module';
import { XtnScrollComponent } from './xtn-scroll/xtn-scroll.component';
import { ClockComponent } from './clock/clock.component';
import { CalenderMainComponent } from './calender-main/calender-main.component';

@NgModule({
  declarations: [
    AppComponent,
    XtnScrollComponent,
    ClockComponent,
    CalenderMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CalendarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClockComponent,
    CalenderMainComponent]
})
export class AppModule { }
