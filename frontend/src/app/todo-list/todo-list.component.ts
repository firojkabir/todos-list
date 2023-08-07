import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
      },
    });
  }

  //   getTodoById = (id: string) => {
  //     this.todoService.getTodoById(id).subscribe({
  //       next: (todo: Todo) => {
  //         console.log(todo);
  //       },
  //     });
  //   };

  deleteTodoById = (id: string) => {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter((todo) => todo._id != id);
      },
    });
  };

  navigateToAddTodo = () => {
    this.router.navigate(['todos/add']);
  };

  navigateToEditTodo = (id: string) => {
    this.router.navigate([`todos/${id}/edit`]);
  };
}
