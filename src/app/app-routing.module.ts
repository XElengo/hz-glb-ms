import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderMainComponent } from './calender-main/calender-main.component';

const routes: Routes = [
  {
    path: 'calendar',
    // loadChildren: './calendar/calendar.module#CalendarModule'
    component: CalenderMainComponent
  },
  // {
    // path: 'clock'
    // component: ,
  // },
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
