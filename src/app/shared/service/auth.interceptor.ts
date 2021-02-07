import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // console.log(this.auth.getToken());
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.auth.getToken()
            }
        });
        return next.handle(request);
    }
}
