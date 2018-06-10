import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { IChallenge } from '../../services/IChallenge';
import { IAlert, AlertService } from '../../services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  @Output() update = new EventEmitter();

  public challenges: IChallenge[];

  constructor(private challengeService: ChallengeService, private alertService: AlertService) { }

  ngOnInit() {
    var l: IChallenge[];
    this.getChallenges();
  }

  getChallenges(){
    this.challengeService.getChallengeList().subscribe(response => {
      this.challenges = response;
    });
  }

  collect(challenge: IChallenge){
    this.challengeService.collect(challenge).subscribe(response => {
      if(response.success){
        this.alertService.success(response.message);
      } 
    }, (error : any) => {
      this.alertService.error("Somthing went wrong!!");
    });
    this.getChallenges();
    this.update.emit();
  }
}
