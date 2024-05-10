import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from '../shared/home/home.component';

const routes: Routes = [
  { path: '', component: UserComponent ,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    { path: 'fav', loadChildren: () => import('./fav/fav.module').then(m => m.FavModule) },
    { path: 'userrecipe', loadChildren: () => import('./userrecipe/userrecipe.module').then(m => m.UserrecipeModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
