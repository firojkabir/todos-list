import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.scss'],
})
export class AddEditTodoComponent {
  id = '';
  todoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl(false),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.todoService.getTodo(this.id).subscribe({
        next: (todo: Todo) => {
          this.todoForm.patchValue(todo);
        },
      });
    }
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return;
    }

    if (this.id) {
      this.todoService.updateTodo(this.id, this.todoForm.value).subscribe({
        next: () => {
          this.router.navigate(['todos']);
        },
      });
    } else {
      this.todoService.createTodo(this.todoForm.value).subscribe({
        next: () => {
          this.router.navigate(['todos']);
        },
      });
    }
  }
}
