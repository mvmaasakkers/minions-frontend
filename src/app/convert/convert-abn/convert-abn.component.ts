import { Component, OnInit } from '@angular/core';
import { Reward } from '../reward';
import { DeductCreditsService } from '../../services/deduct-credits.service';

@Component({
  selector: 'app-convert-abn',
  templateUrl: './convert-abn.component.html',
  styleUrls: ['./convert-abn.component.css']
})
export class ConvertAbnComponent implements OnInit {

  constructor(private deductCreditsService: DeductCreditsService) { }

  ngOnInit() {
  }

  deduct(cost: number) {
    this.deductCreditsService.deduct(cost).subscribe(r => { console.log("r=", r)});
  }

  rewards = [
    new Reward("0.01% Mortgagerent discount", 1000),
    new Reward("1% Ensurance discount", 750),
    new Reward("credit card wallet", 50)
  ]
}
