import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IReponse } from './IResponse';
import { IToken } from './IToken';

export const ENDPOINT = new InjectionToken<string>('endpoint');


@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient, @Inject(ENDPOINT) private endpoint) { }

    register(username: string, password: string) : Observable<IReponse>{
        return this.http.post<IReponse>(`${this.endpoint}/v1/user`, {username: username, password: password});
    }

    login(username: string, password: string) : Observable<IToken> {
        var url = `${this.endpoint}/v1/token`;
        console.log(url);
       return this.http.post<IToken>(url, {username: username, password: password})
        .pipe(
            map(user => {
                if(user && user.token){
                    localStorage.setItem('token', JSON.stringify(user));
                }
                return user;
            })
        )
    }    

    logout(){
        localStorage.removeItem('token');
    }

}