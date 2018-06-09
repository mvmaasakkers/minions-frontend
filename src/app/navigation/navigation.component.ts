import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss']
})

export class NavigationComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}

export const routerConfig: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'huis',
        component: HuisComponent
    }
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];