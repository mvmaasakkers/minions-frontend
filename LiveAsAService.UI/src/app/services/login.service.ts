import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) { }

    login(username: string, password: string) : Observable<any> {
        if(username == 'demo' && password == 'demo'){
            localStorage.setItem('currentUser', JSON.stringify( { 'displayName': 'Frankie' }));
            
            let observable=Observable.create(observer => {
                setTimeout(() => {
                  observer.next( { 'displayName': 'Frankie' });
                  console.log("am done");
                  observer.complete(); // to show we are done with our processing
                 // observer.error(new Error("error message"));
                }, 2000);
          
              })
            return observable;
        }

        

        return;
        /*
        this.http.post<any>('', {username: username, password: password})
        .pipe(
            map(user => {

                if(user){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            })
        )
        */
    }    

    logout(){
        localStorage.removeItem('currentUser');
    }

}