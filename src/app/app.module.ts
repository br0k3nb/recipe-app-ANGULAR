import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Header } from './Header/app.component';
import { RecipeDetail } from './Recipe/RecipeDetail/app.component';
import { RecipeItem } from './Recipe/RecipeItem/app.component';
import { RecipeList } from './Recipe/RecipeList/app.component';
import { ShoppingList } from './Shopping/ShoppingList/app.component';
import { ShoppingListEdit } from './Shopping/ShoppingListEdit/app.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DropdownDirective } from './shared/dropdown.directive';

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
    RecipeEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
