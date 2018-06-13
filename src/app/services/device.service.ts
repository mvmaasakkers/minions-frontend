import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDevice } from './IDevice';
import { Observable } from 'rxjs';

@Injectable()
export class DeviceService {
    
    devices: IDevice[] = [
        { title: "Device1", image: "device1.jpg"},
        { title: "Device2", image: "device1.jpg"},
        { title: "Device3", image: "device1.jpg"},
        { title: "Device4", image: "device1.jpg"},
        { title: "Device5", image: "device1.jpg"},
    ];

    constructor(private http: HttpClient) { }

    get() {
        return Observable.create(observer => {
            setTimeout(() => {
              observer.next(this.devices);
              console.log("am done");
              observer.complete(); // to show we are done with our processing
             // observer.error(new Error("error message"));
            }, 2000);
      
          })
        }
}