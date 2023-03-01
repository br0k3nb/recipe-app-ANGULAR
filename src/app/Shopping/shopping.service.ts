import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";
@Injectable()
export class ShoppingService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [{name: 'Tomatoes', amount: 12,}, { name: 'Apples', amount: 3}];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredientById(id: number) {
        return this.ingredients[id];
    }

    addNew(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addMultipe(ingredients: Ingredient[]) {
        this.ingredients = [...this.ingredients, ...ingredients];
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateById(id: number, newData: Ingredient) {
        this.ingredients[id] = newData;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteById(id: number) {
        this.ingredients.splice(id, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}