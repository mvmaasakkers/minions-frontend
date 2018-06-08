import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthService, CLIENT_ID } from './auth.service';
import { TokenInterceptor } from './token.interceptor';

export { AuthService } from './auth.service';
export { TokenInterceptor } from './token.interceptor';


const providers = [
    AuthService
    , {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }
];

@NgModule({
    imports: [ HttpClientModule ],
    providers: providers
})
export class AuthModule {
    static forRoot(clientId: string): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                ...providers,
                { provide: CLIENT_ID, useValue: clientId }
            ]
        };
    }
}
