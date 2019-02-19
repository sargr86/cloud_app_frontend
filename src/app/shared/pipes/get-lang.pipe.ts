import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getLang'
})
export class GetLangPipe implements PipeTransform {

    /**
     * Returns current system language
     * @returns {any}
     */
    transform(): any {
        return localStorage.getItem('lang')||'en';
    }

}
