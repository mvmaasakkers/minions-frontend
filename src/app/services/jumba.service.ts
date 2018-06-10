import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJumba } from './IJumba';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ENDPOINT } from './login.service';

@Injectable()
export class JumbaService {
    
    constructor(private http: HttpClient, @Inject(ENDPOINT) private endpoint) { }

    get(id: string){
        return this.http.get<IJumba>(`http://api.styfee.com/v1/properties/${id}`);
    }

}