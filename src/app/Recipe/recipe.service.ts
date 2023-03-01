import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { Recipe } from "./RecipeList/recipe.model";
import { ShoppingService } from "../Shopping/shopping.service";
import { Ingredient } from "../Shopping/ingredient.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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
            "Spaghetti Squash That Fancies Itself Baked Ziti",
            "In a surprise to absolutely no one, spaghetti squash—unfairly maligned as bland and watery—tastes amazing when smothered in flavorful tomato sauce and blanketed under a layer of melty cheese.",
            "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg",
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
        return this.recipes[id];
    }
    
    addToShoppingList(recipe: Recipe) {
        this.shoppingSrc.addMultipe(recipe.ingredients);
        this.router.navigate(['shopping-list']);
    }

    addNew(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateById(id: number, newData: Recipe) {
        this.recipes[id] = newData;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteById(id: number) {
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}