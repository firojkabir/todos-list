import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: AddEditUserComponent },
  { path: ':id/edit', component: AddEditUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
