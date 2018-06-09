import { Component, OnInit, Input } from '@angular/core';
import { ProgressCounterService } from '../services/progress-counter.service';

@Component({
    selector: 'counter',
    templateUrl: 'counter.component.html',
    
})
export class CounterComponent implements OnInit {

    @Input() value: number;

    constructor(private progressCounterService: ProgressCounterService) {
        console.log("ht");
    }

    ngOnInit() { 
        //this.value.toString()
        console.log('here');
        //this.progressCounterService.progress();
        this.value.toString()
    }



}