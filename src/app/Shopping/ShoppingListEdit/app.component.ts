import { Component, ViewChild, ElementRef } from "@angular/core";
import { ShoppingService } from "../shopping.service";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class ShoppingListEdit {
    @ViewChild('ingName', {static: true}) name: ElementRef;
    @ViewChild('ingAmout', {static: true}) amount: ElementRef;

    constructor(private shopSrc: ShoppingService) {}

    addIng() { this.shopSrc.addNew({name: this.name.nativeElement.value, amount: this.amount.nativeElement.value}) }
}