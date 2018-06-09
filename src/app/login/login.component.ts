import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    model: any = {};
    returnUrl: string;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
    ) { }

    ngOnInit() { 
        this.loginService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {

                }
            );
    }
}