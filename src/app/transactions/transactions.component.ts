import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { EurovaluePipe } from '../pipes/eurovalue.pipe';

const accId: string = "NLABNA0960275106";

@Component({
    selector: 'transactions',
    templateUrl: 'transactions.component.html'
})
export class TransactionsComponent implements OnInit {

    public currentBalance: number;

    constructor(
        private bankService: BankService
    ) {    }

    ngOnInit() {
        this.bankService.transactions(accId).subscribe(
            r => {
                this.currentBalance = r.slice(-1)[0].details.new_balance.amount;
            })
    }

}