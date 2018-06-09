import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { IUser } from '../services/IUser';
import { Observable } from 'rxjs';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    options = { tooltips: { enabled: false } }
    public doughnutChartLabels:string[] = [];
    public doughnutChartData:number[] = [80, 20];
    public lineChartColors:Array<any> = [
        {
            backgroundColor: ["rgba(2,139,69, 0.6)","rgba(255,255,255, 0.6)"],
            borderColor: '#fff',
            pointBackgroundColor: "rgba(0,255,0, 0.6)",
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: "rgba(0,255,0, 0.6)",
            pointHoverBorderColor: "rgba(0,255,0, 0.6)"
          }
      ];
    
    public doughnutChartType:string = 'doughnut';

    user: IUser;

    constructor(private userService: UserService, private bankService: BankService, private alertService: AlertService) { }

    ngOnInit() { 
        this.userService.get().subscribe(response => {
            this.user = response;
        });
        this.bankService.sync().subscribe(response => {
            if(response.success) {
                this.alertService.success(response.message);
            }
        })
    }

}