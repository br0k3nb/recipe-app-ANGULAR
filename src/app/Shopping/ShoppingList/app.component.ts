import { Component, OnInit } from "@angular/core";
import { ShoppingService } from "../shopping.service";
import { Ingredient } from "../ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class ShoppingList implements OnInit {
    ingredients: Ingredient[];

    constructor(private shopSrc: ShoppingService) {}
    
    ngOnInit(): void {
        this.ingredients = this.shopSrc.getIngredients();
        this.shopSrc.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
            return this.ingredients = ingredients;
        })
    }
}