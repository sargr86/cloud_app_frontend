import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {UsersService} from "../services/users.service";
import {GetLangPipe} from "../pipes/get-lang.pipe";
import {AuthService} from "../services/auth.service";

@Injectable()
export class UserResolver implements Resolve<any> {

    constructor(
        private _auth: AuthService,
        private _users: UsersService,
        private getLang: GetLangPipe
    ) {}

    /**
     * Resolves the current user by id
     * @param {ActivatedRouteSnapshot} route
     * @returns {Observable<User>}
     */
    resolve(route: ActivatedRouteSnapshot) {
        return this._users.getUserById({id:route.params.id,lang:this.getLang.transform()});
    }
}
