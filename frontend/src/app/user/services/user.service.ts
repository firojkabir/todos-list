import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers = () => {
    return this.http.get<any[]>(`${environment.apiBaseUrl}/users`);
  };

  getUser = (id: string): Observable<User> => {
    return this.http.get<User>(`${environment.apiBaseUrl}/users/${id}`);
  };

  createUser = (payload: Partial<User>) => {
    return this.http.post<any>(
      `${environment.apiBaseUrl}/auth/register`,
      payload
    );
  };

  deleteUser = (id: string) => {
    return this.http.delete(`${environment.apiBaseUrl}/users/${id}`);
  };

  updateUser = (id: string, payload: any) => {
    return this.http.put(`${environment.apiBaseUrl}/users/${id}`, payload);
  };
}
