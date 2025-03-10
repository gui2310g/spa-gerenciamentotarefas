import { NgClass } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Input() title: String = '';
  @Input() buttonName: String = '';

  onClose(): void {
    this.closeModal.emit();
  }
}
