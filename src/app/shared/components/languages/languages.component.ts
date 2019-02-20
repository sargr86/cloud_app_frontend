import {Component, Input, OnInit} from '@angular/core';
import {language} from "../../constants/language";
import {TranslateService} from "@ngx-translate/core";
import {SubjectService} from "../../services/subject.service";
import {GetLangPipe} from "../../pipes/get-lang.pipe";
import {Router} from "@angular/router";

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

    @Input() menu;

    language: object;
    savedLanguage: string = this.getLang.transform();

    constructor(
        private translate: TranslateService,
        private subject: SubjectService,
        private getLang: GetLangPipe,
        public router: Router
    ) {
        this.subject.getLanguage().subscribe(lang=>{
            this.savedLanguage = lang;
        })
    }

    ngOnInit() {
        // Saving language constant data
        this.language = language;
    }


    /**
     * Returns language images files url
     * @param lang
     * @returns {string}
     */
    langImage(lang) {
        return '../../../assets/images/' + lang + '.png'
    }

    /**
     * Changing system language
     * @param lang
     */
    changeLanguage(lang) {
        this.savedLanguage = lang;
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
        this.subject.setLanguage(lang)

    }
}
