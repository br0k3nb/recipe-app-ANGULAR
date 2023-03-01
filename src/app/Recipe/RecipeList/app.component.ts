import { Component, OnDestroy, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "./recipe.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class RecipeList implements OnInit, OnDestroy {
    constructor(private recipeSrc: RecipeService, private router: Router, private route: ActivatedRoute) {}

    recipes: Recipe[];
    recipesSub: Subscription;

    ngOnInit(): void {
        this.recipes = this.recipeSrc.getRecipes();
        this.recipesSub = this.recipeSrc.recipesChanged.subscribe((recipes: Recipe[]) => {
            return this.recipes = recipes;
        });
    }

    addNew() {
        this.router.navigate(['add'], {relativeTo: this.route});
    }

    ngOnDestroy(): void {
        this.recipesSub.unsubscribe();
    }
}