/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { AuthModule } from './auth.module';


describe('Service: Auth', () => {
    let injector: TestBed;
    let service: AuthService;
    let httpMock: HttpTestingController;

    const clientId = 'dummy client id';
    const dummyToken = {
        access_token: 'dummt token',
        token_type: 'bearer',
        expires_in: 1299
    };


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                AuthModule.forRoot(this.clientId)
            ],
        });
        injector = getTestBed();
        service = injector.get(AuthService);
        httpMock = injector.get(HttpTestingController);
    });

    it('#refreshToken() should return a bearer token', () => {
        service.refreshToken().subscribe(token => {
            expect(token.access_token).toBe(dummyToken.access_token);
            expect(token.token_type).toBe(dummyToken.token_type);
            expect(token.expires_in).toBe(dummyToken.expires_in);
        });

        const req = httpMock.expectOne('../api/token');

        expect(req.request.method).toBe('POST');
        expect(req.request.headers.get('Content-Type')).toBe('application/x-www-form-urlencoded');
        expect(req.request.body).toBe(`grant_type=client_credentials&client_Id=${this.clientId}`);

        req.flush(dummyToken);
    });

    it('#getToken() should return the current token', () => {
        expect(service.getToken()).toBe(dummyToken.access_token);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
