import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.routes').then(home =>home.routes )
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.routes').then(details => details.routes)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/welcome'
  }];
