import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent, AddEditUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
