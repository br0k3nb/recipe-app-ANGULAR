import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./RecipeList/recipe.model";

@Injectable()
export class RecipeService {
    recipeWasChanged = new EventEmitter<Recipe[]>();
    recipeClicked = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Air Fryer Chicken Thighs ', "This is one of those foolproof recipes that you can turn to again and again. The chicken comes out crispy every time and it's perfect for serving with a variety of sides.", 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easy-dinner-recipes-air-fryer-chicken-thighs-1676054392.jpeg?crop=0.8xw:1xh;center,top&resize=980:*')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addNew(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeWasChanged.emit(this.recipes.slice());
    }
}