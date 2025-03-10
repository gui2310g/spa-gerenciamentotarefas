import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LoggedUser } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
}
