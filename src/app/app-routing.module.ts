import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { authGuard } from './core/guards/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard',canActivate:[authGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

  {path:'**',component:NotfoundComponent,title:'Error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
