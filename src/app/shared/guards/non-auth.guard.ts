import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable()
/**
 * Restricts user to go to login/register when authorized
 */
export class NonAuthGuard implements CanActivate {

    constructor(public auth: AuthService, public router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        if (this.auth.loggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
}
