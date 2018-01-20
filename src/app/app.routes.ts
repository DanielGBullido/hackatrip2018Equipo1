import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Step1Component } from './components/step1/step1.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: DashboardComponent,
    //canActivate: [AuthenticationGuardService]
  },
  { path: 'step1', component: Step1Component },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
