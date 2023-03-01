import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ShoppingService } from "../shopping.service";
import { Ingredient } from "../ingredient.model";
import { NgForm, NgModel } from "@angular/forms";
import { Subscription } from "rxjs";
@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class ShoppingListEdit implements OnInit, OnDestroy {
    @ViewChild('formData') dataF: NgForm;
    
    editSub: Subscription;
    editMode = false;
    editId: number;
    editItem: Ingredient;

    constructor(private shopSrc: ShoppingService) {}

    onSubmit(formData: NgModel) {
        const value = formData.value;
        const newIng = new Ingredient(value.name, value.amount);

        if(this.editMode) this.shopSrc.updateById(this.editId, newIng);
        else this.shopSrc.addNew(new Ingredient(value.name, value.amount));

        this.dataF.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shopSrc.deleteById(this.editId);
        this.dataF.reset();
        this.editMode = false;
    }

    onClear() {
        this.dataF.reset();
        this.editMode = false;
    }

    ngOnInit(): void {
        this.editSub = this.shopSrc.startedEditing.subscribe(
            (id: number) => {
                this.editMode = true;
                this.editId = id;
                this.editItem = this.shopSrc.getIngredientById(id);

                this.dataF.setValue({
                    name: this.editItem.name,
                    amount: this.editItem.amount
                });
            }
        );
    }

    ngOnDestroy(): void {
        this.editSub.unsubscribe();
    }
}