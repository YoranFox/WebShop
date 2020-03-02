import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth = localStorage.getItem('session_cookie');
    if(auth != "null" && auth != null){
      request = request.clone({
        headers: request.headers.set('authorization', auth)
      });
    }
    return next.handle(request);
  }
}
