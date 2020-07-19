import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    let tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(tokenizedRequest);
  }
}
