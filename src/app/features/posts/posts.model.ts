import { Category } from "../categories/categories.model";

export interface Post {
    id?: number,
    category: Category;
    title: string,
    body: string,
    author: string
}