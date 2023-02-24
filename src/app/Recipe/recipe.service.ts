import { Injectable, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { Recipe } from "./RecipeList/recipe.model";
import { ShoppingService } from "../Shopping/shopping.service";
import { Ingredient } from "../Shopping/ingredient.model";

@Injectable()
export class RecipeService {
    // recipeWasChanged = new EventEmitter<Recipe[]>();
    // recipeClicked = new EventEmitter<Recipe>();

    constructor(private shoppingSrc: ShoppingService, private router: Router) {}

    private recipes: Recipe[] = [
        new Recipe(
            "Fried Rice",
            "Fried rice has been a kitchen staple since as early as the Sui Dynasty (589 – 618 CE) in China. The primary reason for the continued popularity and ubiquity of this dish comes down to two things: its adaptability and the fact that people almost always cook too much rice to eat in one sitting.",
            "https://hips.hearstapps.com/hmg-prod/images/delish-fried-rice-009-1543877224.jpg?crop=1xw:1xh;center,top&resize=980:*",
            [
                new Ingredient("(Table spoon) sesame oil", 3),
                new Ingredient("Large eggs", 3),
                new Ingredient("Carrots", 2),
                new Ingredient("Green onions", 3),
                new Ingredient("Cloves garlic", 3),
                new Ingredient("(Table spoon) peeled and minced ginger", 3),
                new Ingredient("(Cups) cooked long grain rice", 4),
                new Ingredient("(Cups) frozen peas", 3),
                new Ingredient("(Table sponn) low-sodium soy sauce", 3)
            ]
        ),
        new Recipe(
            "Fried Rice",
            "Fried rice has been a kitchen staple since as early as the Sui Dynasty (589 – 618 CE) in China. The primary reason for the continued popularity and ubiquity of this dish comes down to two things: its adaptability and the fact that people almost always cook too much rice to eat in one sitting.",
            "https://hips.hearstapps.com/hmg-prod/images/delish-fried-rice-009-1543877224.jpg?crop=1xw:1xh;center,top&resize=980:*",
            [
                new Ingredient("(Table spoon) sesame oil", 3),
                new Ingredient("Large eggs", 3),
                new Ingredient("Carrots", 2),
                new Ingredient("Green onions", 3),
                new Ingredient("Cloves garlic", 3),
                new Ingredient("(Table spoon) peeled and minced ginger", 3),
                new Ingredient("(Cups) cooked long grain rice", 4),
                new Ingredient("(Cups) frozen peas", 3),
                new Ingredient("(Table sponn) low-sodium soy sauce", 3)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes.slice()[id];
    }

    addNew(recipe: Recipe) {
        this.recipes.push(recipe);
        // this.recipeWasChanged.emit(this.recipes.slice());
    }

    addToShoppingList(recipe: Recipe) {
        this.shoppingSrc.addMultipe(recipe.ingredients);
        this.router.navigate(['shopping-list']);
    }
}