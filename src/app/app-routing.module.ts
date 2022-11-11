import { NgModule } from '@angular/core';
import { FavouriteComponent } from './body/profile/favourite/favourite.component';
import { MyProfileComponent } from './body/profile/my-profile/my-profile.component';
import { PrevOrderComponent } from './body/profile/prev-order/prev-order.component';
import { SavedAddressComponent } from './body/profile/saved-address/saved-address.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainpageComponent } from './body/mainpage/mainpage.component';

const routes: Routes = [
  {path:"",component: MainpageComponent},
  {path:"cart",component: CartComponent},
  {path:"checkout",component: CheckoutComponent},
  {path:'profile' ,children:[
    {path:'profile/my-profile',component:MyProfileComponent},
    {path:'profile/my-previous-orders',component:PrevOrderComponent},
    {path:'profile/favorites',component:FavouriteComponent},
    {path:'profile/saved-address',component:SavedAddressComponent},]}

 
];

@NgModule({
  imports:
   [RouterModule.forRoot(routes)],

  exports:
   [RouterModule]
})
export class AppRoutingModule { }
