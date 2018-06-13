import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from './login.service';
import { IReponse } from './IResponse';
import { Observable } from 'rxjs';
import { IBankAccount } from './IBankAccount';
import { ITransaction } from './ITransaction';


@Injectable()
export class BankService {
    
    constructor(private http: HttpClient,  @Inject(ENDPOINT) private endpoint) { }

    sync() : Observable<IReponse> {
        return this.http.post<IReponse>(`${this.endpoint}/v1/bank/sync`, {});
    }

    accounts() : Observable<IBankAccount[]> {
        return this.http.get<IBankAccount[]>(`${this.endpoint}/v1/bank/accounts`);
    }

    get(id: string) : Observable<IBankAccount> {
        return this.http.get<IBankAccount>(`${this.endpoint}/v1/bank/accounts/${id}`);
    }

    transactions(id: string) : Observable<ITransaction[]> {
        return this.http.get<ITransaction[]>(`${this.endpoint}/v1/bank/accounts/${id}/transactions`);
    }
}