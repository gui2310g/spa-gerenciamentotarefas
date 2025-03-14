import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { AuthService } from '../../core/services/auth/auth.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUser } from '../../core/models/login.model';
import { User, userTipo } from '../../core/models/user.model';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  showModal: boolean = false;
  user!: User;
  loginForm!: FormGroup;
  createForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  openDialog() {
    this.showModal = true;
  }

  closeDialog() {
    this.showModal = false;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.createForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      status: [userTipo.USER]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const loggedUser: LoggedUser = this.loginForm.value;
      this.authService.login(loggedUser).subscribe({
        next: (response) =>
          this.router.navigate([response.role === userTipo.ADMIN ? 'admin' : 'user',]),
      });
    }
  }

  create(): void {
    if (this.createForm.valid) {
      const formData: User = this.createForm.value;
      this.authService.createUser(formData).subscribe({
        next: () => { this.router.navigate(['user'])}
      })
    }
  }
}
