import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HuisComponent } from './huis/huis.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginService } from './services/login.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './services/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/gaurd.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'huis', component: HuisComponent, },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HuisComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule.forRoot("YOURKEY_HERE"),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
