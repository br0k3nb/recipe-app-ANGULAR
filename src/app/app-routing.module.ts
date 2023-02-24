import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Header } from './Header/app.component';
import { RecipeDetail } from './Recipe/RecipeDetail/app.component';
import { RecipeItem } from './Recipe/RecipeItem/app.component';
// import { RecipeList } from './Recipe/RecipeList/app.component';
import { ShoppingList } from './Shopping/ShoppingList/app.component';
import { ShoppingListEdit } from './Shopping/ShoppingListEdit/app.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { ShoppingService } from './Shopping/shopping.service';

const routes: Routes = [
  {path: 'recipe', component: RecipeItem, children: [
    {path: 'detail/:id', component: RecipeDetail},
    {path: 'edit/:id', component: RecipeEditComponent},
  ]},
  {path: '', redirectTo: 'recipe', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
