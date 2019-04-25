import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CalenderMainComponent } from '../calender-main/calender-main.component';

const routes: Routes = [
  {
    // path: 'calendarMain',
    // component: CalenderMainComponent,
},
{path: '', redirectTo: 'calendarMain', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
