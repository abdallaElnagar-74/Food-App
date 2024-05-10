import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

import {MatCheckboxModule} from '@angular/material/checkbox';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatFormFieldModule} from '@angular/material/form-field';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UpdateUserComponent } from './update-user/update-user.component';
@NgModule({
  exports:[NgxDropzoneModule,SweetAlert2Module,NavbarComponent,SidebarComponent,HomeComponent,MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
     MatPaginatorModule,
     MatSlideToggleModule,
     MatCheckboxModule,
     MatSelectModule,
    RxReactiveFormsModule
  ],
  imports: [MatInputModule,
    CommonModule,
    NgxDropzoneModule,
SweetAlert2Module,
RouterModule,
MatIconModule,
MatMenuModule,
MatButtonModule,
 MatDialogModule,
 FormsModule,
 MatFormFieldModule,
 MatDividerModule,
 MatPaginatorModule,
 MatSlideToggleModule,
 MatCheckboxModule,
 MatSelectModule,
 RxReactiveFormsModule,
 ReactiveFormsModule
  ],
  declarations: [SharedComponent, NavbarComponent, SidebarComponent, HomeComponent, DeleteComponent, UpdateUserComponent,]
})
export class SharedModule { }
