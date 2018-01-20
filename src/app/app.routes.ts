import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
]

export const APP_ROUTING = RouterModule.forRoot(app_routes);
