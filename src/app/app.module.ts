import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleRouteComponent } from './schedule-route/schedule-route.component';
import { RouteComponent } from './route/route.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ScheduleBookComponent } from './schedule-book/schedule-book.component'
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ScheduleRouteComponent,
    RouteComponent,
    ScheduleBookComponent,
    HomeComponent,
    BookingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientJsonpModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
