import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "./recipe.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class RecipeList implements OnInit {
    constructor(private recipeSrc: RecipeService, private router: Router, private route: ActivatedRoute) {}

    recipes: Recipe[];

    ngOnInit(): void {
        this.recipes = this.recipeSrc.getRecipes();
        // this.recipeSrc.recipeWasChanged.subscribe((recipes: Recipe[]) => {
        //     return this.recipes = recipes;
        // });
    }

    addNew() {
        this.router.navigate(['add'], {relativeTo: this.route});
    }

    // addNewRecipe({name, description, imagePath, ingredients}) { }
}