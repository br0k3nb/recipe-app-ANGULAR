import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetail } from './Recipe/RecipeDetail/app.component';
import { RecipeItem } from './Recipe/RecipeItem/app.component';
import { ShoppingList } from './Shopping/ShoppingList/app.component';
import { ShoppingListEdit } from './Shopping/ShoppingListEdit/app.component'
import { RecipeEdit } from './Recipe/RecipeEdit/app.component';
import { PageNotFound } from './pageNotFound/app.component';
import { RecipeNotSelected } from './Recipe/RecipeNotSelected/app.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeItem, children: [
    {path: '', component: RecipeNotSelected},
    {path: 'detail/:id', component: RecipeDetail},
    {path: 'add', component: RecipeEdit},
    {path: 'edit/:id', component: RecipeEdit},
  ]},
  {path: 'shopping-list', component: ShoppingList, children:[
    {path: 'edit/:id', component: ShoppingListEdit}
  ]},
  {path: 'page-not-found', component: PageNotFound},
  {path: '**', redirectTo: 'page-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
