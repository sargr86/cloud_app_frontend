import {Component} from '@angular/core';
import {GetLangPipe} from "./shared/pipes/get-lang.pipe";

import {language} from './shared/constants/language';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    savedLang: string = this.getLang.transform();

    constructor(
        private getLang: GetLangPipe,
        public translate: TranslateService
    ) {
        // Setting languages for the app
        translate.addLangs(language.supported);

        // This language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(language.default);

        // The lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(this.savedLang);

    }

}
