import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDevice } from './IDevice';
import { Observable } from 'rxjs';
import "rxjs/add/observable/of";

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
        return Observable.of(this.devices);
    }
}