import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import { Gateway } from './base.gateway';
import { environment } from '../../../environments/environment';


// Mocking backend validation behavior.
@Injectable()
export class RestfulGateway extends Gateway<any> {
    private readonly hostAuth = `${environment.apiUrl}geo/locations/`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    send(data: any): Observable<any> {
        return this.httpClient.post(this.hostAuth, data);
    }
}
