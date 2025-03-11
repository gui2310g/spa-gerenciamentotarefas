import { Component, OnInit } from '@angular/core';
import { User, userTipo } from '../../../core/models/user.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  user!: User | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.UserStatus();
  }

  UserStatus(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.user = {
        email: payload.sub,
        tipo: payload.role as userTipo
      };
    }
  }


  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
