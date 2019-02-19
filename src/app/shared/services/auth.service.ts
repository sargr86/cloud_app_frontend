import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";


// JWT helper
import {JwtHelperService} from "@auth0/angular-jwt";
import * as jwtDecode from 'jwt-decode';


import {User} from "../models/User";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    // Gets environment-sensitive api host url
    domain: string = environment.apiHost;
    userData: User;
    formProcessing: boolean = false;

    constructor(
        private httpClient: HttpClient,
        private jwtHelper: JwtHelperService,
        private router: Router
    ) {
        //Receiving user data from here!!!!
        if (this.loggedIn()) {
            let token = localStorage.getItem('token');
            this.userData = jwtDecode(token);
        }
    }

    /**
     * Sends data for user registration
     * @param params
     * @returns {Observable<Object>}
     */
    register(params) {
        return this.httpClient.post(`${this.domain}auth/register`, params);
    }

    /**
     * Checks to see if user logged in/ token expired
     */
    loggedIn() {
        return !this.jwtHelper.isTokenExpired();
    }

    /**
     * Sends login credentials
     * @param formData
     */
    login(formData) {
        return this.httpClient.post<User>(`${this.domain}auth/login`, formData);
    }

    /**
     * Logs out the current user
     */
    logout() {
        localStorage.setItem('token', '');
        this.router.navigate(['login']);
    }
}
