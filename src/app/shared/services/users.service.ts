import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../models/User";

@Injectable()
export class UsersService {
    // Gets environment-sensitive api host url
    domain: string = environment.apiHost;

    constructor(
        private httpClient: HttpClient
    ) {
    }

    /**
     * Get a user by id
     * @param params
     * @returns {Observable<User>}
     */
    getUserById(params) {
        return this.httpClient.get<User>(`${this.domain}users/getById`, {params: params});
    }

    /**
     * Gets all users list
     * @param params
     * @returns {Observable<User[]>}
     */
    get(params){
        return this.httpClient.get<User[]>(`${this.domain}users/get`, {params: params});
    }

    /**
     * Sends the selected user data to change the status
     * @param params
     * @returns {Observable<User[]>}
     */
    changeUserStatus(params){
        return this.httpClient.put<User[]>(`${this.domain}users/change-status`, params)
    }
}
