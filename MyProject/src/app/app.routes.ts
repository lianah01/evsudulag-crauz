import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./main/users/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];
