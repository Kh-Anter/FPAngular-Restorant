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
import { ProfileComponent } from './body/profile/profile.component';
import { MyProfileComponent } from './body/offer/my-profile/my-profile.component';
import { PrevOrderComponent } from './body/profile/prev-order/prev-order.component';
import { FavouriteComponent } from './body/profile/favourite/favourite.component';
import { SavedAddressComponent } from './body/profile/saved-address/saved-address.component';

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
    AlloffersComponent,
    ProfileComponent,
    MyProfileComponent,
    PrevOrderComponent,
    FavouriteComponent,
    SavedAddressComponent
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
