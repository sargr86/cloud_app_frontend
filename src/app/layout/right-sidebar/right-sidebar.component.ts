import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
    selector: 'right-sidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

    constructor(
        public router: Router,
        public _auth: AuthService
    ) {
    }

    ngOnInit() {
    }

    /**
     * Navigates to home page or admin dashboard based on role
     */
    navigateHome() {
        this.router.navigate([this._auth.checkRoles('admin') ? 'admin' : '/'])
    }

    /**
     * Checks to see if we're on a form editing/saving page
     * @returns {any}
     */
    get formPage() {
        let routerUrl = this.router.url;
        return (routerUrl.includes('edit') || routerUrl.includes('add')||routerUrl.includes('profile'));
    }

}
