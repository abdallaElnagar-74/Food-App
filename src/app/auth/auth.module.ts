import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { VerifyComponent } from './components/verify/verify.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { UpdatepassComponent } from './components/updatepass/updatepass.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    ResetpassComponent,
    UpdatepassComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RxReactiveFormsModule,
    MatButtonModule, 
    MatDialogModule
  ]
})
export class AuthModule { }
