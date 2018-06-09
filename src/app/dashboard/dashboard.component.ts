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
    options = { tooltips: { enabled: false },
        cutoutPercentage: 75
    }
    public doughnutChartLabels:string[] = [];
    public doughnutChartData:number[] = [80, 20];
    public lineChartColors:Array<any> = [
        {
            backgroundColor: ["rgba(47,213,143)","rgba(228,233,236)"],
            borderColor: '#fff',
            pointBackgroundColor: "rgba(0,255,0, 0.6)",
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: "rgba(0,255,0, 0.6)",
            pointHoverBorderColor: "rgba(0,255,0, 0.6)"
          }
      ];
    
    public doughnutChartType:string = 'doughnut';

    user: IUser;
    isLoading: boolean = true;

    constructor(private userService: UserService, private bankService: BankService, private alertService: AlertService) { }

    ngOnInit() { 
        
        this.userService.get().subscribe(response => {
            this.user = response;
        }, () => {}, () => this.isLoading = false);


        this.bankService.sync().subscribe(response => {
            if(response.success) {
                this.alertService.success(response.message);
            }
        })
    }

}