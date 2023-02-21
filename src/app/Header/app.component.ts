import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class Header {
    @Output() toRender = new EventEmitter<string>();

    constructor() {}

    onRecipeClick(event: string) {
        this.toRender.emit(event);
    }

    onShoppingClick(event: string) {
        this.toRender.emit(event);
    }
}