import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAlbumComponent } from './add-edit-album/add-edit-album.component';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: 'add', component: AddEditAlbumComponent },
  { path: ':id/edit', component: AddEditAlbumComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
