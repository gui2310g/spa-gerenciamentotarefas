import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [RouterLink, ModalComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {
  showUpdateModal: boolean = false;
  showDeleteModal: boolean = false;
  showAddModal: boolean = false;

  openAddModal(): void { this.showAddModal = true; }

  closeAddModal(): void { this.showAddModal = false; }

  openDeleteModal(): void { this.showDeleteModal = true; }

  closeDeleteModal(): void { this.showDeleteModal = false; }

  openUpdateModal(): void { this.showUpdateModal = true; }

  closeUpdateModal(): void { this.showUpdateModal = false; }

  Tasks: any[] = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    titulo: 'Banco',
    descricao: 'Realizando um saque no banco',
    data: '2021-10-10',
    status: 'Pendente'
  }));
}
