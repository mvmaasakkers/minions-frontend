import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService, ENDPOINT } from './services/login.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './services/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/gaurd.service';
import { DevicesComponent } from "./devices/devices.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { CounterComponent } from './dashboard/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'devices', component: DevicesComponent, canActivate: [AuthGuard] },
    { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
      DevicesComponent,
      CounterComponent,
      TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot("YOURKEY_HERE"),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
      ChartsModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    { provide: ENDPOINT, useValue: 'http://api.styfee.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
