import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { DeleteComponent } from './components/delete/delete.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddEditRecipeComponent,
    DeleteComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RecipesModule { }
