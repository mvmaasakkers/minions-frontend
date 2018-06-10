import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';


const accId: string = "NLABNA0815453539";

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
        console.log("init");
        //this.bankService.accounts().subscribe(
        //    r => console.log(r)
        //)
        this.bankService.transactions(accId).subscribe(
            r => console.log(r)
        )
    }

}