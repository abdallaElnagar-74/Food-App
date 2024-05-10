import { SharedComponent } from './../../shared/shared.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddEditCategoryComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
    ,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
