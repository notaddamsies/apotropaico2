import { Injectable } from "@angular/core";
import { Category } from "../categories/categories.model";
import { Post } from "../posts/posts.model";

@Injectable({
    providedIn: 'root'
})

export class PostStore {
    posts: Post[] = [];
    active: Post = {} as Post;
    categories: Category[] = [];

    loadAll(post: Post[]) {
        this.posts = post;
    }

    delete(post: Post): void {
        this.posts = this.posts.filter(p => p.id !== post.id);
    }

    update(post: Post) {
        this.posts = this.posts.map(p => p.id === post.id ? post : p);
    }

    add(post: Post) {
        this.posts = [...this.posts, post];
    }

    setActive(post: Post) {
        this.active = post;
    }

    resetActive() {
        this.active = {} as Post;
    }
}