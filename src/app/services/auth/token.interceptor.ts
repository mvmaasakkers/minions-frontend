import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public injector: Injector) { }

    setHeaders(request) {
        return function(token) {
            return request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        };
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): any {
        const auth = this.injector.get(AuthService);

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${auth.getToken()}`
            }
        });

        return next.handle(request).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        
                    }
                }
                return Observable.throw(error);
            })
        );
    }
}
