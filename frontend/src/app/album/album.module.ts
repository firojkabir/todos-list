import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AddEditAlbumComponent } from './add-edit-album/add-edit-album.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  declarations: [AlbumListComponent, AddEditAlbumComponent],
  imports: [CommonModule, ReactiveFormsModule, AlbumRoutingModule],
})
export class AlbumModule {}
