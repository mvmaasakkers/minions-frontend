import { Injectable, InjectionToken, Inject  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthBearer } from './authbearer';

import { Observable } from 'rxjs';
import { tap, distinctUntilChanged, debounceTime, finalize } from 'rxjs/operators';

export const CLIENT_ID = new InjectionToken<string>('Auth.ClientId');


@Injectable()
export class AuthService {
    private refreshTokenCall;

    constructor(private http: HttpClient, @Inject(CLIENT_ID) private clientId) { }

    saveTokenInLocalStorage(token: AuthBearer) {
      localStorage.setItem('access_token', token.access_token);
    }

    getToken() {
      if (localStorage.getItem('access_token')) {
        return localStorage.getItem('access_token');
      }
      return '';
    }

    refreshToken(): Observable<AuthBearer> {
      if (!this.refreshTokenCall) {

        this.refreshTokenCall = this.http.post<AuthBearer>('../api/token',
            `grant_type=client_credentials&client_Id=${this.clientId}`,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            }).pipe(
                debounceTime(500),
                distinctUntilChanged(),
                tap(this.saveTokenInLocalStorage),
                finalize(() => this.refreshTokenCall = null)
            );
      }

      return this.refreshTokenCall;
    }
}
