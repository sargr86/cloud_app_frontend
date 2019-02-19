//These imports are for angular (calendar) locale to work!!!!!
import {registerLocaleData} from '@angular/common';
import localeHy from '@angular/common/locales/hy';
import localeRu from '@angular/common/locales/ru';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material";
import {MomentDateAdapter} from '@angular/material-moment-adapter';

registerLocaleData(localeHy);
registerLocaleData(localeRu);


// Material date picker formats
export const dpFormats = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

export const dpProviders = [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: dpFormats}
];
