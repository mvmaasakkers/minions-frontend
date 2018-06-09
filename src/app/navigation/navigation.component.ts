import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss']
})

export class NavigationComponent implements OnInit {

    collapse: boolean = true;

    constructor(private router: Router, private route: ActivatedRoute) {

         }

    ngOnInit() { 

    }

    navigate(path) {
        this.router.navigate([{outlets: {primary: path }}], 
                             {relativeTo: this.route});
    }

}
