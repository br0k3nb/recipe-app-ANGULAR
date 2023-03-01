import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RecipeEdit implements OnInit { 
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeSrc: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (data: Params) => {
        this.id = data['id'];
        this.editMode = data['id'] !== undefined
        this.initForm();
      }
    )
  }

  private initForm() {
    let initialState = {
      name: '',
      imagePath: '',
      description: '',
      ingredients: new FormArray([])
    }
    
    
    if(this.editMode) {
      const recipe = this.recipeSrc.getRecipeById(this.id);

      initialState.name = recipe.name;
      initialState.imagePath = recipe.imagePath;
      initialState.description = recipe.description;
      
      if(recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          initialState.ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }

    const {name, imagePath, description, ingredients} = initialState;

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  onSubmit() {
    if(this.editMode) {
      this.recipeSrc.updateById(this.id, this.recipeForm.value);
      this.router.navigate(['../../', 'detail', this.id], {relativeTo: this.route});
    }
    else {
      this.recipeSrc.addNew(this.recipeForm.value);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onDeleteIng(id: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(id);
  }

  onCancel() {
    if(this.id) this.router.navigate(['../../', 'detail', this.id], {relativeTo: this.route});
    else this.router.navigate(['../'], {relativeTo: this.route});
  }

}