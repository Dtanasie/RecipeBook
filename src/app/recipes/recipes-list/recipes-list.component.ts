import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe } from '../recipes.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
recipes: Recipe[]=[
  new Recipe('Recipe 1', 'Recipe 1 description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg'),
  new Recipe('Recipe 2', 'Recipe 2 description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
  }
}
