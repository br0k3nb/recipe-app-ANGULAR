import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { RecipeService } from "../recipe.service";
import { Recipe } from "../RecipeList/recipe.model";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class RecipeDetail {
    recipe: Recipe;
    recipeId: number;

    constructor(private recipeSrc: RecipeService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.recipeId = parseInt(params['id']);
            this.recipe = this.recipeSrc.getRecipeById(parseInt(params['id']));
        });
    }

    editRecipe() {
        this.router.navigate(['../../', 'edit', this.recipeId], {relativeTo: this.route});
    }

    addToSl(recipe: Recipe): void {
        this.recipeSrc.addToShoppingList(recipe);
    }

    onDelete() {
        this.recipeSrc.deleteById(this.recipeId);
        this.router.navigate(['recipes']);
    }
}