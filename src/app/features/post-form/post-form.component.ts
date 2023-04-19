import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../categories/categories.model';
import { Post } from '../posts/posts.model';
import { NgForm } from '@angular/forms';
import { PostStore } from '../posts/posts.store';
import { CategoriesStore } from '../categories/categories.store';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() category: Category[] = [];
  @Input() active: Post = {} as Post;
  @Output() resetActive: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  constructor(
    public postStore: PostStore,
    public categoryStore: CategoriesStore
  ) { }

  ngOnInit(): void {
  }

}
