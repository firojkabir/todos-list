import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent {
  albums: Album[] = [];

  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (albums: Album[]) => {
        this.albums = albums;
      },
    });
  }

  deleteAlbumById = (id: string) => {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album._id != id);
      },
    });
  };

  navigateToEditAlbum = (id: string) => {
    this.router.navigate([`albums/${id}/edit`]);
  };
}
