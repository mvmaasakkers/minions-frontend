import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AlertService {
    private subject = new Subject<IAlert>();
    private keepAfterRouteChange = false;

    constructor(private router: Router){
        router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                if(this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else{
                    this.clear();
                }
            }
        });
    } 

    getAlert() : Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string){
        this.alert("success", message, this.keepAfterRouteChange);
    }

    error(message: string){
        this.alert("danger", message, this.keepAfterRouteChange);
    }

    alert (type: string, message: string, keepAfterRouteChange = false){
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<IAlert> { type: type, message: message});
    }

    clear(){
        this.subject.next();
    }
}

export interface IAlert{
    type: string;
    message: string;
}