import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
    // canActivate: [AuthGuard],
  },
  { path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  {
    path: 'todos/add',
    component: AddEditTodoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos/:id/edit',
    component: AddEditTodoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./album/album.module').then((m) => m.AlbumModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
