import { Component, OnInit } from '@angular/core';
import { AlertService, IAlert } from '../services/alert.service';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {
    alerts: IAlert[];
    constructor(private alertService: AlertService) { }

    ngOnInit() {         
        this.alertService.getAlert().subscribe((alert: IAlert) => {
            if(!alert){
               this.alerts = [];
               return;
            }
            setTimeout(() => this.removeAlert(alert), 20000);

            this.alerts.push(alert);
        })
    }

    removeAlert(alert: IAlert){
        this.alerts = this.alerts.filter(x=> x != alert);
    }
}