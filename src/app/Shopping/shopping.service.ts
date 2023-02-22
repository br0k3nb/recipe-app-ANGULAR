import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";
@Injectable()
export class ShoppingService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [{name: 'Tomatoes', amount: 12,}, { name: 'Apples', amount: 3}];

    getIngredients() {
        return this.ingredients.slice();
    }

    addNew(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}