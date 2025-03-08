import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgClass, ModalComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  showModal: boolean = false;

  openDialog() {
    this.showModal = true;
  }

  closeDialog() {
    this.showModal = false;
  }
}

