import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Task, tipoTask } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task/task.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule, DatePipe],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent implements OnInit{
  tasks: Task[] = [];
  task!: Task;
  activeModal: 'add' | 'update' | 'delete' | null = null;
  taskForm!: FormGroup;

  constructor(private taskService: TaskService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.findAllTasks();

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [tipoTask.PENDENTE]
    });
  }

  openModal(type: 'add' | 'update' | 'delete', task?: Task): void {
    this.activeModal = type;

    if (task) {
      this.task = task;
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        status: task.status,
      });
    } else if (type === 'add') {
      this.taskForm.reset({
        status: tipoTask.PENDENTE,
      });
    }
  }

  closeModal(): void {
    this.activeModal = null;
  }

  findAllTasks(): void {
    this.taskService.findAllTasks().subscribe({
      next: (data) => (this.tasks = data)
    })
  }

  createTask(): void {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      this.taskService.createTask(formData).subscribe({
        next: () => {
          this.findAllTasks();
          this.closeModal();
        }
      });
    }
  }

  updateTask(): void {
    if (this.taskForm.valid && this.task) {
      const formData = this.taskForm.value;
      this.taskService.updateTask(this.task.id, formData).subscribe({
        next: () => {
          this.findAllTasks();
          this.closeModal();
        }
      });
    }
  }

  deleteTasks(): void {
    if (this.task) {
      this.taskService.deleteTask(this.task.id).subscribe({
        next: () => {
          this.tasks = this.tasks.filter((t) => t.id !== this.task.id);
          this.closeModal();
        }
      });
    }
  }
}
