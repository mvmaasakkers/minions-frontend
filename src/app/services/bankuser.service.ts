import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReponse } from './IResponse';
import { Observable } from 'rxjs';
import { ENDPOINT } from './login.service';

@Injectable()
export class BankuserService {
    
    constructor(private http: HttpClient, @Inject(ENDPOINT) private endpoint) { }

    get(){

    }

    add(username: string, password: string, email: string) : Observable<IReponse> {
        return this.http.post<IReponse>(`${this.endpoint}v1/user/bankuser`, { username: username, password: password, email: email});
    }


}