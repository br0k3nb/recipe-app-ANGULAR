import { Component } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class RecipeList {
    constructor(private recipeSrc: RecipeService) {}

    recipes = this.recipeSrc.getRecipes();

    addNewRecipe({name, description, imagePath}) {
        this.recipeSrc.addNew({name, description, imagePath});
    }

    onRecipeClick(i: number) {
        this.recipeSrc.recipeClicked.emit(this.recipes[i]);
    }
}