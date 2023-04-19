import { Injectable } from '@angular/core';
import { CategoriesStore } from './categories.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from './categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    public store: CategoriesStore,
    private client: HttpClient
  ) { }

  url: string = environment.baseUrl + "/api/categories";

  loadAll() {
    this.client.get<Category[]>(this.url).subscribe(c => this.store.loadAll(c));
  }

  delete(category: Category) {
    const urlDel = this.url + "/" + category.id;
    this.client.delete<Category>(urlDel).subscribe(c => this.store.delete(category));
  }

  add(category: Category) {
    this.client.post<Category>(this.url, category).subscribe(c => this.store.add(c));
  }

  update(category: Category) {
    const urlUp = this.url + "/" + this.store.active.id;
    this.client.put<Category>(urlUp, category).subscribe(c => this.store.update(c));
  }

  setActive(category: Category) {
    this.store.setActive(category);
  }

  resetActive() {
    this.store.resetActive();
  }
}
