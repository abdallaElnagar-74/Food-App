import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserrecipeComponent } from './userrecipe.component';

const routes: Routes = [{ path: '', component: UserrecipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserrecipeRoutingModule { }
