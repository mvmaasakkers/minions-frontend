import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: 'counter.component.html',
    
})
export class CounterComponent implements OnInit {

    @Input() value: number;

    constructor() { }

    ngOnInit() { 
    }


    getLetters(){
        if(this.value) {
            return this.value.toString().split('');
        }
        return ["0"];
    }
}