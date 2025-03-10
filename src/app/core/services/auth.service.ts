import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LoggedUser } from '../models/login.model';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(loggedUser: LoggedUser): Observable<any> {
    return this.http.post<{ token: string, user: User }>(`${this.apiUrl}/auth`, loggedUser)
      .pipe(
        tap((response) => {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('user', JSON.stringify(response.user));
        }),
        catchError(this.handleError)
      );
  }


  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred. Please try again.';
    if (error.status === 409) errorMessage = 'User or email already exists';

    return throwError(() => new Error(errorMessage));
  }
}
