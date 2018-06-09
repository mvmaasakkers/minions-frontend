import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor(private bankService: BankService) { }

    ngOnInit() { 
        this.bankService.sync().subscribe(response => {
            if(response.success) {
                alert(response.message);
            }
        })
    }

}