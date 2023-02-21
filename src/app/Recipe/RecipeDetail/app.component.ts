import { Component } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../RecipeList/recipe.model";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class RecipeDetail {
    recipe: Recipe;

    constructor(private recipeSrc: RecipeService) { }

    ngOnInit(): void {
        this.recipeSrc.recipeClicked.subscribe((recipe: Recipe) => {
            this.recipe = recipe;
        })
    }
}