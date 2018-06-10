import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { ITransaction } from '../../services/ITransaction';

const accId: string = "NLABNA0960275106";

@Component({
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  public transactions: ITransaction[];

  constructor(private bankService: BankService) { }

  ngOnInit() {
    //this.bankService.accounts().subscribe(r => console.log("accounts", r));
    this.bankService.transactions(accId).subscribe(
        r =>  {
          // console.log(r);
        this.transactions = r;
        })
  }

}
