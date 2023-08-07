import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add-edit-album',
  templateUrl: './add-edit-album.component.html',
  styleUrls: ['./add-edit-album.component.scss'],
})
export class AddEditAlbumComponent {
  id = '';
  albumForm = new FormGroup({
    title: new FormControl('', Validators.required),
    artist: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.albumService.getAlbum(this.id).subscribe({
        next: (album: Album) => {
          this.albumForm.patchValue(album);
        },
      });
    }
  }

  onSubmit() {
    if (!this.albumForm.valid) {
      return;
    }

    if (this.id) {
      this.albumService.updateAlbum(this.id, this.albumForm.value).subscribe({
        next: () => {
          this.router.navigate(['albums']);
        },
      });
    } else {
      this.albumService.createAlbum(this.albumForm.value).subscribe({
        next: () => {
          this.router.navigate(['albums']);
        },
      });
    }
  }
}
