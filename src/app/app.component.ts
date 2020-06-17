import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { BlogService } from './app.service';

@Component({
  selector: 'app-blog-posts-search',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userIdSubject = new Subject<string>();

  readonly blogPosts$ = this.userIdSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(userId => this.blogService.fetchPosts(userId))
  );

  constructor(private blogService: BlogService) { }

  searchPosts(userId: string) {
    this.userIdSubject.next(userId);
  }
}
