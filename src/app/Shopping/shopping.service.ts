import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";
@Injectable()
export class ShoppingService {
    ingredients: Ingredient[] = [{name: 'Tomatoes', amount: 12,}, { name: 'Apples', amount: 3}];

    addNew(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}