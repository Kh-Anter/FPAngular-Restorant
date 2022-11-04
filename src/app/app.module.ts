import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './body/categories/categories.component';
import { AboutusComponent } from './body/aboutus/aboutus.component';
import { ShopComponent } from './body/shop/shop.component';
import { OfferComponent } from './body/offer/offer.component';
import { BestDeliveryComponent } from './body/best-delivery/best-delivery.component';
import { ReviewsComponent } from './body/reviews/reviews.component';
import { AlloffersComponent } from './body/alloffers/alloffers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    AboutusComponent,
    ShopComponent,
    OfferComponent,
    BestDeliveryComponent,
    ReviewsComponent,
    AlloffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
