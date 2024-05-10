import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MyHttpiInterceptor } from './core/interceptors/my-httpi.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:MyHttpiInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
