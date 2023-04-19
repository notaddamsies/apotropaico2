import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../categories/categories.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() active: Category = {} as Category;
  @Output() resetActive: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  constructor() { }

  ngOnInit(): void {
  }

}
