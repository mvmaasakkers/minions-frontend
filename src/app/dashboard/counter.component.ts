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
        var a = this.progressCounterService.progress().subscribe(data => { 
            console.log('v = ', data);
        });
        console.log('here', a);
        this.value.toString()
    }



}