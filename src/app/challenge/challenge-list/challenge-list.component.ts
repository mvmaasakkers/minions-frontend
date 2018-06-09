import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { IChallenge } from '../../services/IChallenge';

@Component({
  selector: 'challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  public challenges: IChallenge[];

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    var l: IChallenge[];
    this.challengeService.getChallengeList().subscribe(response => {
        console.log("r = ", response);
        this.challenges = response;
    })
  }

}
