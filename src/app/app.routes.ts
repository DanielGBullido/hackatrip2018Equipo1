import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';

import { AuthGuardService } from './services/auth/auth-guard.service';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'dashboard?code=:id',
    component: DashboardComponent,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'step1',
    component: Step1Component,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'step2',
    component: Step2Component,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'step3',
    component: Step3Component,
    //canActivate: [AuthGuardService]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }

];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
