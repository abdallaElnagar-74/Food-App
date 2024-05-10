import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken:any = localStorage.getItem('tokenOfUser')
    let x =request.clone({
      setHeaders:{
        'Authorization':`${myToken}`
      }
    })
    return next.handle(x);
  }
}
