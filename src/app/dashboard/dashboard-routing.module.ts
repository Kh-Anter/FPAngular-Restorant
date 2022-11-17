import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ItemsComponent } from './items/items.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
