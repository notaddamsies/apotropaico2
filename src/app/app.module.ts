import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { PostsComponent } from './features/posts/posts.component';
import { CategoryFormComponent } from './features/category-form/category-form.component';
import { PostFormComponent } from './features/post-form/post-form.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
