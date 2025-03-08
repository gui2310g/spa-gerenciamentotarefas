import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalComponent } from "../../components/modal/modal.component";
@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterLink, ModalComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
  showModal: boolean = false;

  OpenModal(): void {
    this.showModal = true
  }

  CloseModal(): void {
    this.showModal = false
  }

  Usuarios: any[] = [
    {
      id: 1,
      nome: 'Juan',
      email: 'juanmendes@gmail.com'
    },
    {
      id: 2,
      nome: 'Pedro',
      email: 'pedrolopes@orkut.com'
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 4,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 5,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 6,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 7,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 8,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 9,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'sandymaria@hotmail.com'
    }
  ]
}
