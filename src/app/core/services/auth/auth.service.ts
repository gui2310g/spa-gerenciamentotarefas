import { Injectable } from '@angular/core';
import { User, userTipo } from '../../models/user.model';
import { LoggedUser } from '../../models/login.model';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(loggedUser: LoggedUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth`, loggedUser).pipe(
      tap((response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('role', response.role);
      }),
      catchError(this.handleError)
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/usuarios`, user).pipe(
      tap((response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('role', response.status);
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  getUserRole(): userTipo | null {
    const role = sessionStorage.getItem('role');
    return role ? (role as userTipo) : null;
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.status === 409) errorMessage = 'Email ou senha invalido';
    if (error.status === 400) errorMessage = 'Email ja existente ou inexistente';
    return throwError(() => new Error(errorMessage));
  }
}
