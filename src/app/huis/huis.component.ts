import { Component, OnInit } from '@angular/core';
import { JumbaService } from '../services/jumba.service';
import { IJumba } from '../services/IJumba';

@Component({
    selector: 'huis',
    templateUrl: 'huis.component.html',
    styleUrls: ['huis.component.scss']
})

export class HuisComponent implements OnInit {

    constructor(private jumbaService: JumbaService) { }
    jumbaData: IJumba;
    ngOnInit() { 
        this.jumbaService.get('6988CK25').subscribe(response => {
            this.jumbaData = response;
            console.log(response);

        });
    }
    getImage(jumbaDataNew: IJumba){
        if (jumbaDataNew){
            return jumbaDataNew.Payload.Images[0];
        }
    }

}