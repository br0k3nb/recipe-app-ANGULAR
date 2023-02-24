import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class RecipeList implements OnInit {
    constructor(private recipeSrc: RecipeService) {}

    recipes: Recipe[];

    ngOnInit(): void {
        this.recipes = this.recipeSrc.getRecipes();
        this.recipeSrc.recipeWasChanged.subscribe((recipes: Recipe[]) => {
            return this.recipes = recipes;
        });
    }

    addNewRecipe({name, description, imagePath, ingredients}) {
        // this.recipeSrc.addNew({name, description, imagePath, ingredients: {name: ingredients[0], amount: ingredients[1]}});
    }

    onRecipeClick(i: number) {
        this.recipeSrc.recipeClicked.emit(this.recipes[i]);
    }
}