import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";
@Injectable()
export class ShoppingService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [{name: 'Tomatoes', amount: 12,}, { name: 'Apples', amount: 3}];

    getIngredients() {
        return this.ingredients.slice();
    }

    addNew(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addMultipe(ingredients: Ingredient[]) {
        this.ingredients = [...this.ingredients, ...ingredients];
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}