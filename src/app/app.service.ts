import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BlogPost } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  fetchPosts(id: string): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}/posts?userId=${id}`).pipe(
      catchError(err => of([]))
    );
  }
}
