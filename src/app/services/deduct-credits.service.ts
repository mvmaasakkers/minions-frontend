import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINT } from './login.service';
import { IPoints } from './IPoints';
import { IUser } from './IUser';
import { IReponse } from './IResponse';

@Injectable({
  providedIn: 'root'
})

export class DeductCreditsService {

  deduct(cost: number): Observable<IReponse> {
    console.log("here");
    return this.http.post<IReponse>(`${this.endpoint}/v1/user/pay`, { points: cost});
  }

  constructor(private http: HttpClient, @Inject(ENDPOINT) private endpoint) { }
}
