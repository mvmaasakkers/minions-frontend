import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const ENDPOINT = new InjectionToken<string>('endpoint');

@Injectable()

export class ProgressCounterService {

  constructor(private http: HttpClient
   // , private endpoint: string
  //  , @Inject(ENDPOINT) private endpoint
  ) { }


  progress() : Observable<Number> {
    var endpoint = '';
    var url = `${endpoint}/v1/progressCounter`;
    console.log('url = ', url);
    return this.http.get<Number>(url); 
  }
  
}
