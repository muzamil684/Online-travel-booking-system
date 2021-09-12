import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { BengaluruComponent } from './bengaluru/bengaluru.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { HotelsPageIComponent } from './hotels-page-i/hotels-page-i.component';
import { PrintReceiptComponent } from './print-receipt/print-receipt.component';

const routes: Routes = [
  {path:'hotels',component:HotelsComponent,
     children:[
         {path:'Bengaluru',component:BengaluruComponent},
        {path:'Chennai',component:ChennaiComponent},
        {path:':id',component:HotelsPageIComponent}
         
     ]},
  
  {path:'payment-page',component:PaymentPageComponent,children:[
    {path:'print-receipt',component:PrintReceiptComponent}
    
  ]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
