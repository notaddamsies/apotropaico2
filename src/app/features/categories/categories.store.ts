import { EventEmitter, Injectable, Input, Output } from "@angular/core";
import { Category } from "./categories.model";

@Injectable({
    providedIn: 'root'
})

export class CategoriesStore {
    categories: Category[] = []
    active: Category = {} as Category

    loadAll(categories: Category[]) {
        this.categories = categories;
    }

    delete(category: Category) {
        this.categories = this.categories.filter(c => c.id !== category.id);
    }

    update(category: Category) {
        this.categories = this.categories.map(c => c.id === category.id ? category : c);
    }

    add(category: Category) {
        this.categories = [...this.categories, category];
    }

    setActive(category: Category) {
        this.active = category;
    }

    resetActive() {
        this.active = {} as Category;
    }
}