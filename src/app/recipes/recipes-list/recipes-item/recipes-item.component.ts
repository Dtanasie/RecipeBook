import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input()  recipe: Recipe;
@Output() RecipeSelected= new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  OnSelected()
  {
    this.RecipeSelected.emit();
    
  }
 
}
