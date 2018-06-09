import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINT } from './login.service';

//export const ENDPOINT = new InjectionToken<string>('endpoint');

@Injectable({
  providedIn: 'root'
})

export class DeductCreditsService {
  deduct(cost: number): Observable<any> {

    var url = `${this.endpoint}/v1/xxx`;
    console.log(url);

    return this.http.put(url, cost);
  }

  constructor(private http: HttpClient, @Inject(ENDPOINT) private endpoint) { }
}
