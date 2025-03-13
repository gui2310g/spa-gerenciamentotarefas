import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
      return false;
    }

    const requiredRole = route.data['role'];
    const userRole = this.authService.getUserRole();

    if (requiredRole && !requiredRole.includes(userRole)) {
      this.router.navigate(['access-denied']);
      return false;
    }

    return true;
  }
};
