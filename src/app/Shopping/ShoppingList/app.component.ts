import { Component, OnInit, OnDestroy } from "@angular/core";
import { ShoppingService } from "../shopping.service";
import { Ingredient } from "../ingredient.model";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class ShoppingList implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    currentSub: Subscription;

    constructor(private shopSrc: ShoppingService) {}
    
    ngOnInit(): void {
        this.ingredients = this.shopSrc.getIngredients();
        this.currentSub = this.shopSrc.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
            return this.ingredients = ingredients;
        })
    }

    onEditItem(id: number) {
        this.shopSrc.startedEditing.next(id);
    }

    ngOnDestroy(): void {
        this.currentSub.unsubscribe();
    }
}