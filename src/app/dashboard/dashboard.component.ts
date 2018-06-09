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