import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { PostsComponent } from './features/posts/posts.component';
import { CategoryFormComponent } from './features/category-form/category-form.component';
import { PostFormComponent } from './features/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PostsComponent,
    CategoryFormComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
