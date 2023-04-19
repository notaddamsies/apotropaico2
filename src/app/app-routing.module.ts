import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './features/categories/categories.component';
import { PostsComponent } from './features/posts/posts.component';

const routes: Routes = [{
  path: "categories",
  component: CategoriesComponent,
},
{
  path: "posts",
  component: PostsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
