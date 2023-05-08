import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ScheduleRouteComponent} from './schedule-route/schedule-route.component';
import { RouteComponent } from './route/route.component';
import { ScheduleBookComponent } from './schedule-book/schedule-book.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [ {path:'',component:HomeComponent,canActivate : [AuthGuard]},
{path:'login',component:LoginComponent},
{path:'shuttleRoutes',component:ScheduleRouteComponent,canActivate : [AuthGuard]},
{path:'register',component:RegistrationComponent},
{path:'shuttleRoutes/:id',component:RouteComponent,canActivate : [AuthGuard]},
{path:'scheduleService',component:ScheduleBookComponent,canActivate : [AuthGuard]},
{path:'mybookings',component:BookingComponent,canActivate : [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
