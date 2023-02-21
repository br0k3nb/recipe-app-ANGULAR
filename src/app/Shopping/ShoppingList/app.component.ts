import { Component } from "@angular/core";
import { ShoppingService } from "../shopping.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ShoppingService]
})
export class ShoppingList {
    constructor(private shopSrc: ShoppingService) {}
    
    ingredients = this.shopSrc.ingredients;
}