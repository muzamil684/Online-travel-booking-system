import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { SignupComponent } from './signup/signup.component';
import { TrainsComponent } from './trains/trains.component';
import { BengaluruComponent } from './bengaluru/bengaluru.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { HotelsPageIComponent } from './hotels-page-i/hotels-page-i.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'flights',component:FlightsComponent},
  {path:'trains',component:TrainsComponent},


     {path:'hotels',component:HotelsComponent,
     children:[
         {path:'Bengaluru',component:BengaluruComponent},
        {path:'Chennai',component:ChennaiComponent},
        {path:':id',component:HotelsPageIComponent}
         
     ]},
   

  
  
    
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'payment-page',component:PaymentPageComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
