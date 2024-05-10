import { SharedComponent } from './../../shared/shared.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewuserComponent } from './components/viewuser/viewuser.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewuserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
