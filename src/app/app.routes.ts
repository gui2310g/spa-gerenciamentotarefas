import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LayoutComponent } from './pages/layout-page/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { userTipo } from './core/models/user.model';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin',
        component: AdminPageComponent,
        canActivate: [AuthGuard],
        data: { role: userTipo.ADMIN },
      },
      {
        path: 'user',
        component: UserPageComponent,
        canActivate: [AuthGuard],
        data: { role: userTipo.USER },
      },
    ],
  },
  { path: 'access-denied', component: AccessDeniedComponent },
];
