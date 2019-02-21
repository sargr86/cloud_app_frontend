import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {SubjectService} from "../../shared/services/subject.service";
import {GetLangPipe} from "../../shared/pipes/get-lang.pipe";
import {AuthService} from "../../shared/services/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    pageTitle: string = '';
    lang: string = this.getLang.transform();

    constructor(
        public router: Router,
        public  _auth: AuthService,
        private subject: SubjectService,
        private getLang: GetLangPipe
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                let data = event.snapshot.data;
                this.pageTitle = data.title;
            }
        });
        this.subject.getLanguage().subscribe(lang => {
            this.lang = lang;
        })
    }

    ngOnInit() {
    }

    /**
     * Gets url for add-*item button
     * @returns {string}
     */
    getAddBtnUrl() {
        return `/admin/${this.router.url}/add`;
    }

    /**
     * Checks to see if we're on a form editing/saving page
     * @returns {any}
     */
    get formPage() {
        let routerUrl = this.router.url;
        return (routerUrl.includes('edit') || routerUrl.includes('add'))
            || this.pageTitle == 'admin_dashboard' || this.pageTitle == 'profile_terminal';
    }
}
