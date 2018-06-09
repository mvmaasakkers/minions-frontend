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
import { HomeComponent } from './home/home.component';
import { BankService } from './services/bank.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './alert/alert.component';
import { UserService } from './services/user.service';
import { DeviceService } from './services/device.service';
import { ConvertComponent } from './convert/convert.component';
import { ConvertAbnComponent } from './convert/convert-abn/convert-abn.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'devices', component: DevicesComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: 'convert', component: ConvertComponent, canActivate: [AuthGuard] }, 
  { path: 'convert/abn', component: ConvertAbnComponent, canActivate: [AuthGuard] }, 
    {path: 'home' , component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
      DevicesComponent,
      CounterComponent,
      TransactionsComponent,
      HomeComponent,
      NavigationComponent,
      ConvertComponent,
      ConvertAbnComponent
      AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot("YOURKEY_HERE"),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    LoginService,
    { provide: ENDPOINT, useValue: 'http://api.styfee.com' },
    BankService,
    AlertService,
    UserService,
    DeviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
