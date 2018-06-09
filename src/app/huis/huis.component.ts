import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'huis',
    templateUrl: 'huis.component.html',
    styleUrls: ['huis.component.scss']
})

export class HuisComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}

@Component({
    selector: 'ngbd-tabset-basic',
    templateUrl: './huis.component.html',
    styleUrls: ['./huis.component.scss']
  })
  export class NgbdTabsetBasic { }