import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Header } from './Header/app.component';
import { RecipeDetail } from './Recipe/RecipeDetail/app.component';
import { RecipeItem } from './Recipe/RecipeItem/app.component';
import { RecipeList } from './Recipe/RecipeList/app.component';
import { ShoppingList } from './Shopping/ShoppingList/app.component';
import { ShoppingListEdit } from './Shopping/ShoppingListEdit/app.component'
import { RecipeEdit } from './Recipe/RecipeEdit/app.component';
import { PageNotFound } from './pageNotFound/app.component';
import { RecipeNotSelected } from './Recipe/RecipeNotSelected/app.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { RecipeService } from './Recipe/recipe.service';
import { ShoppingService } from './Shopping/shopping.service';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    RecipeDetail,
    RecipeItem,
    RecipeList,
    ShoppingList,
    ShoppingListEdit,
    DropdownDirective,
    RecipeEdit,
    PageNotFound,
    RecipeNotSelected
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
