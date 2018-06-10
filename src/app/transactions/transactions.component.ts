import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';



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
    }

}