import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { AdminService } from '../../core/services/admin/admin.service';
import { User } from '../../core/models/user.model';
@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent implements OnInit {
  showModal: boolean = false;
  usuarios: User[] = [];
  usuario!: User;

  OpenModal(user: User): void {
    this.usuario = user;
    this.showModal = true;
  }

  CloseModal(): void {
    this.showModal = false;
  }

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(): void {
    this.adminService.findAllUsers().subscribe({
      next: (data) => (this.usuarios = data),
    });
  }

  deleteUsers(): void {
    if (this.usuario) {
      this.adminService.deleteUsers(this.usuario.id).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(
            (user) => user.id !== this.usuario!.id
          );
          this.CloseModal();
        },
      });
    }
  }
}
