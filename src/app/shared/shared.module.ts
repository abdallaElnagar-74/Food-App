import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports:[NgxDropzoneModule,SweetAlert2Module],
  imports: [
    CommonModule,
    NgxDropzoneModule,
SweetAlert2Module,

  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
