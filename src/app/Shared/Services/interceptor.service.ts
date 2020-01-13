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
    console.log("intercept!");
    request = request.clone({
      setHeaders: {
        Authorization: localStorage.getItem('session_cookie')
      }
    });
    return next.handle(request);
  }
}
