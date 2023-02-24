import { Component } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'], 
    providers: [RecipeService]
})
export class RecipeItem { }