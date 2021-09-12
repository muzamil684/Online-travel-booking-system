import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { BengaluruComponent } from './bengaluru/bengaluru.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { HotelsPageIComponent } from './hotels-page-i/hotels-page-i.component';
import { PrintReceiptComponent } from './print-receipt/print-receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    PageNotFoundComponent,
    PaymentPageComponent,
    BengaluruComponent,
    ChennaiComponent,
    HotelsPageIComponent,
    PrintReceiptComponent,
   
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
