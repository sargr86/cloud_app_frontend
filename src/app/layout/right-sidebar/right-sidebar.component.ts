import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
    selector: 'right-sidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

    currentUrl:string;
    constructor(
        public router: Router,
        public _auth: AuthService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
      this.router.events.subscribe(dt=>{
        if(dt instanceof NavigationEnd){
            this.currentUrl = dt.url;
        }
      })

    }

    /**
     * Navigates to home page or admin dashboard based on role
     */
    navigateHome() {
        this.router.navigate([this._auth.checkRoles('admin') ? '/admin' : '/'])
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
