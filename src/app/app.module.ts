import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { TrainsComponent } from './trains/trains.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { FooterComponent } from './footer/footer.component';
import { BengaluruComponent } from './bengaluru/bengaluru.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { HotelsPageIComponent } from './hotels-page-i/hotels-page-i.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    TrainsComponent,
    HotelsComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    PaymentPageComponent,
    FooterComponent,
    BengaluruComponent,
    ChennaiComponent,
    HotelsPageIComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
