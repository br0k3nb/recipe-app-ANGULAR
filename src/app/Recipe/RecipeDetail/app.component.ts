import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { RecipeService } from "../recipe.service";
import { Recipe } from "../RecipeList/recipe.model";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class RecipeDetail {
    recipe: Recipe;

    constructor(private recipeSrc: RecipeService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            console.log(params);
            console.log(this.recipeSrc.getRecipeById(parseInt(params['id'])));
            this.recipe = this.recipeSrc.getRecipeById(parseInt(params['id']));
        });

        // this.recipeSrc.recipeClicked.subscribe((recipe: Recipe) => {
        //     this.recipe = recipe;
        // })
    }

    addToSl(recipe: Recipe): void {
        this.recipeSrc.addToShoppingList(recipe);
    }

}