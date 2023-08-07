import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.apiBaseUrl}/albums`);
  }

  getAlbum = (id: string): Observable<Album> => {
    return this.http.get<Album>(`${environment.apiBaseUrl}/albums/${id}`);
  };

  createAlbum = (payload: any) => {
    return this.http.post(`${environment.apiBaseUrl}/albums`, payload);
  };

  deleteAlbum = (id: string) => {
    return this.http.delete(`${environment.apiBaseUrl}/albums/${id}`);
  };

  updateAlbum = (id: string, payload: any) => {
    return this.http.put(`${environment.apiBaseUrl}/albums/${id}`, payload);
  };
}
