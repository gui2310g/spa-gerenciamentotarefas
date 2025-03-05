import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LayoutComponent } from './pages/layout-page/layout.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: "admin", component: AdminPageComponent },
      { path: "user", component: UserPageComponent }
    ]
  }
];
