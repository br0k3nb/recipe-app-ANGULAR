import { Component, ViewChild, ElementRef } from "@angular/core";
import { ShoppingService } from "../shopping.service";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class ShoppingListEdit {
    detectChangeOnAmount: number = 0;
    detectChangeOnName: string = '';
    wasOver: boolean = false;

    @ViewChild('ingName', {static: true}) name: ElementRef;
    @ViewChild('ingAmount', {static: true}) amount: ElementRef;

    constructor(private shopSrc: ShoppingService) {}

    onMouseLeave() {
        if(this.detectChangeOnAmount === 0 || this.detectChangeOnName === '') return this.wasOver = true;
        else return this.wasOver = false;
    }

    onChangeAmount(event: Event) {
        const value = parseInt((event.target as HTMLInputElement).value);
        if(value) return this.detectChangeOnAmount = value;
        else return this.detectChangeOnAmount = 0;
    }

    onChangeName(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        if(value) return this.detectChangeOnName = value;
        else return this.detectChangeOnName = '';
    }

    addIng() { this.shopSrc.addNew({name: this.name.nativeElement.value, amount: parseInt(this.amount.nativeElement.value)}) }
}