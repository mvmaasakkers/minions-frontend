import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from './login.service';
import { Observable } from 'rxjs';
import { IChallenge } from './IChallenge';
import { IReponse } from './IResponse';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient, @Inject(ENDPOINT) private endpoint) { }

  getChallengeList() : Observable<IChallenge[]> {
    return this.http.get<IChallenge[]>(`${this.endpoint}/v1/challenges`);
  }

  collect(challenge: IChallenge) : Observable<IReponse>  {
    return this.http.post<IReponse>(`${this.endpoint}/v1/user/challenge/${challenge.id}`,{});
  }
}
