import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ItemsComponent } from './items/items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeesComponent } from './employees/employees.component';
import { ClipboardModule } from 'ngx-clipboard';
import { OrdersComponent } from './orders/orders.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    MainDashboardComponent,
    ItemsComponent,
    EmployeesComponent,
    OrdersComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFunctions(() => getFunctions()),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ClipboardModule,
  ],

  exports:[MainDashboardComponent],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],//yousef
  bootstrap:[MainDashboardComponent]
})
export class DashboardModule { }
