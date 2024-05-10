import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserrecipeRoutingModule } from './userrecipe-routing.module';
import { UserrecipeComponent } from './userrecipe.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserrecipeComponent
  ],
  imports: [
    CommonModule,
    UserrecipeRoutingModule,
    SharedModule
  ]
})
export class UserrecipeModule { }
