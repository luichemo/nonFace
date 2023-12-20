import { Routes } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
        
    
      },
      {
        path: 'private',
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
        
    
      },
      { path: '**', redirectTo: 'public/home' }

];
