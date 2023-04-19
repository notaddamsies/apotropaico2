import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { PostStore } from './posts.store';
import { CategoriesStore } from '../categories/categories.store';
import { CategoriesService } from '../categories/categories.service';
import { Post } from './posts.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    public postStore: PostStore,
    public categoryStore: CategoriesStore,
    public categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.postsService.loadAll();
    this.categoryService.loadAll();
  }

  delete(post: Post) {
    this.postsService.delete(post);
  }
  
  save(form: NgForm) {
    if(this.postStore.active.id) {
      this.update(form);
    }
    else {
      this.add(form);
    }
    this.resetActive();
  }

  update(form: NgForm) {
    const newPost = {
      title: form.value.title,
      body: form.value.body,
      author: form.value.author,
      category: form.value.category
    }
    this.postsService.update(newPost);
  }

  add(form: NgForm) {
    const newPost = {
      title: form.value.title,
      body: form.value.body,
      author: form.value.author,
      category: form.value.category
    }
    this.postsService.add(newPost);
  }

  setActive(post: Post) {
    this.postsService.setActive(post);
  }

  resetActive() {
    this.postsService.resetActive();
  }
}
