import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './IUser';
import { ENDPOINT } from './login.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    
    constructor(private http: HttpClient,  @Inject(ENDPOINT) private endpoint) { }

    get() : Observable<IUser> {
        return this.http.get<IUser>(`${this.endpoint}/v1/user`);
    }
}