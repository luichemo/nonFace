import { Routes } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import path from 'path';
import { LoginFormComponent } from './public/login-form/login-form.component';

export const routes: Routes = [
    {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
        
    
      },
      {
      path: 'login',
      component: LoginFormComponent
      },
      {
        path: 'private',
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
        
    
      },
      { path: '**', redirectTo: 'public/home' }

];
