import { Injectable } from '@angular/core';
import { User, userTipo } from '../../models/user.model';
import { LoggedUser } from '../../models/login.model';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  login(loggedUser: LoggedUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth`, loggedUser).pipe(
      tap((response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('role', response.role);
      }),
      catchError(() => this.handleLoginError())
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/usuarios`, user).pipe(
      tap((response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('role', response.status);
      }),
      catchError(() => this.handleCreateError())
    );
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  getUserRole(): userTipo | null {
    const role = sessionStorage.getItem('role');
    return role ? (role as userTipo) : null;
  }


  private handleCreateError(): Observable<never> {
    let errorMessage: string;
    errorMessage = 'Este email já existe';

    this.notificationService.show(errorMessage);

    return throwError(() => new Error(errorMessage));
  }

  private handleLoginError(): Observable<never> {
     let errorMessage: string;
     errorMessage = 'Email ou senha inválido.';

     this.notificationService.show(errorMessage);

     return throwError(() => new Error(errorMessage));
  }
}
