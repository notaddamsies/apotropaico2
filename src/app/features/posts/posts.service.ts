import { Injectable } from '@angular/core';
import { PostStore } from './posts.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    public postStore: PostStore,
    private client: HttpClient
  ) { }

  url: string = environment.baseUrl + "/api/posts";

  loadAll() {
    this.client.get<Post[]>(this.url).subscribe(p => this.postStore.loadAll(p));
  }

  delete(post: Post) {
    const urlDel = this.url + "/" + post.id;
    this.client.delete<Post>(urlDel).subscribe(p => this.postStore.delete(post));
  }

  add(post: Post) {
    this.client.post<Post>(this.url, post).subscribe(p => this.postStore.add(p));
  }

  update(post: Post) {
    const urlUp = this.url + "/" + this.postStore.active.id;
    this.client.put<Post>(urlUp, post).subscribe(p => this.postStore.update(p));
  }

  resetActive() {
    this.postStore.resetActive();
  }

  setActive(post: Post) {
    this.postStore.setActive(post);
  }
}
