import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';


const accId: string = "NLABNA0960275106";

@Component({
    selector: 'transactions',
    templateUrl: 'transactions.component.html'
})
export class TransactionsComponent implements OnInit {

    constructor(
        private bankService: BankService
    ) {
        console.log("ctor");
    }

    ngOnInit() {
        this.bankService.transactions(accId).subscribe(
            r => {
                console.log(r);
                this.currentBalance = r.slice(-1)[0].details.new_balance.amount;
                console.log("cb = ", this.currentBalance);
            })
    }

}