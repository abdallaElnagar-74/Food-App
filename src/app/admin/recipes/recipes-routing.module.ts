import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';

const routes: Routes = [{ path: '', component: RecipesComponent },
  {path:'add',component:AddEditRecipeComponent,title:'Add Recipe Form'},
  {path:'edit/:id',component:AddEditRecipeComponent,title:'Add Recipe Form'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
