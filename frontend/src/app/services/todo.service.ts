import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiBaseUrl}/todos`);
  }

  getTodo = (id: string): Observable<Todo> => {
    return this.http.get<Todo>(`${environment.apiBaseUrl}/todos/${id}`);
  };

  createTodo = (payload: any) => {
    return this.http.post(`${environment.apiBaseUrl}/todos`, payload);
  };

  deleteTodo = (id: string) => {
    return this.http.delete(`${environment.apiBaseUrl}/todos/${id}`);
  };

  updateTodo = (id: string, payload: any) => {
    return this.http.put(`${environment.apiBaseUrl}/todos/${id}`, payload);
  };
}
