import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
    // Gets environment-sensitive api host url
    domain: string = environment.apiHost;

    constructor(
        private httpClient: HttpClient
    ) {
    }

    /**
     * Sends data for user registration
     * @param params
     * @returns {Observable<Object>}
     */
    register(params) {
        return this.httpClient.post(`${this.domain}auth/register`, params);
    }
}
