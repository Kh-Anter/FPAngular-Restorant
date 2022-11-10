import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './body/profile/favourite/favourite.component';
import { MyProfileComponent } from './body/profile/my-profile/my-profile.component';
import { PrevOrderComponent } from './body/profile/prev-order/prev-order.component';
import { SavedAddressComponent } from './body/profile/saved-address/saved-address.component';

const routes: Routes = [
  {path:'' ,children:[
    {path:'profile/my-profile',component:MyProfileComponent},
    {path:'profile/my-previous-orders',component:PrevOrderComponent},
    {path:'profile/favorites',component:FavouriteComponent},
    {path:'profile/saved-address',component:SavedAddressComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
