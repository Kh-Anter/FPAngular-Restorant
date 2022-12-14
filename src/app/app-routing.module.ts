import { NgModule } from '@angular/core';
import { FavouriteComponent } from './body/profile/favourite/favourite.component';
import { MyProfileComponent } from './body/profile/my-profile/my-profile.component';
import { PrevOrderComponent } from './body/profile/prev-order/prev-order.component';
import { SavedAddressComponent } from './body/profile/saved-address/saved-address.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainpageComponent } from './body/mainpage/mainpage.component';
import { ProfileComponent } from './body/profile/profile.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { ItemsComponent } from './dashboard/items/items.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';

const routes: Routes = [
  {path:"",component: MainpageComponent},
  {path:"cart",component: CartComponent},
  {path:"checkout",component: CheckoutComponent},
  {path:"categories/:id",component: CategoriesDetailsComponent},
  {path:'profile' ,component:ProfileComponent,children:[
    {path:'my-profile',component:MyProfileComponent},
    {path:'my-previous-orders',component:PrevOrderComponent},
    {path:'favorites',component:FavouriteComponent},
    {path:'saved-address',component:SavedAddressComponent},]},
  {path:"dashboard",component: MainDashboardComponent,children:[
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    {path:'welcome',component:WelcomeComponent},
    {path:'items',component:ItemsComponent},
    {path:'orders',component:OrdersComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'saved-address',component:SavedAddressComponent}]}
];

@NgModule({
  imports:
   [RouterModule.forRoot(routes)],

  exports:
   [RouterModule]
})
export class AppRoutingModule { }
