import { Injectable, InjectionToken, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const CLIENT_ID = new InjectionToken<string>('Auth.ClientId');


@Injectable()
export class AuthService {
    constructor() { }

    getToken() {
      if (localStorage.getItem('token')) {
        return JSON.parse(localStorage.getItem('token')).token;
      }
      return '';
    }
}