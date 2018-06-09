import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: 'counter.component.html',
    
})
export class CounterComponent implements OnInit {

    @Input() value: number;

    constructor() { }

    ngOnInit() { 
        this.value.toString()
    }



}