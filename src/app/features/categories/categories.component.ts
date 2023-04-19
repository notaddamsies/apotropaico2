import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { CategoriesStore } from './categories.store';
import { Category } from './categories.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private service: CategoriesService,
    public categoryStore: CategoriesStore
  ) { }

  ngOnInit(): void {
    this.service.loadAll();
  }

  delete(category: Category) {
    this.service.delete(category);
  }

  save(form: NgForm){
    if(this.categoryStore.active.id) {
      this.update(form);
    }
    else {
      this.add(form);
    }
  }

  update(form: NgForm) {
    const newCategory = {
      name: form.value.name,
      tags: form.value.tags
    }
    this.service.update(newCategory);
    this.resetActive();
  }

  add(form: NgForm) {
    const newCategory = {
      name: form.value.name,
      tags: form.value.tags
    }
    this.service.add(newCategory);
    this.resetActive();
  }

  setActive(category: Category) {
    this.service.setActive(category);
  }

  resetActive() {
    this.service.resetActive();
  }
}
