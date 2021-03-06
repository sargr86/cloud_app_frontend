import {Injectable} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class SubjectService {

    public language = new Subject<string>();
    public table = new Subject<any>();
    public tableData = new Subject<any>();
    public pageTitle = new Subject<string>();

    constructor() {
    }


    /**
     * Sets current language of the system and passes to subscribed components
     * @param value
     */
    setLanguage(value) {
        this.language.next(value);
    }

    /**
     * Gets current language of the system and returns to subscribed components
     * @returns {Observable<string>}
     */
    getLanguage(): Observable<string> {
        return this.language.asObservable();
    }

    /**
     * Sets material table event
     * @param value
     */
    setTableForm(value) {
        this.table.next(value)
    }

    /**
     * Gets material table events
     * @returns {Observable<any>}
     */
    getTableForm(): Observable<any> {
        return this.table.asObservable();
    }


    setTableData(value){
        this.tableData.next(value)
    }

    getTableData(): Observable<any> {
        return this.tableData.asObservable();
    }

    setPageTitle(value){
        this.pageTitle.next(value)
    }

    getPageTitle(): Observable<string>{
        return this.pageTitle.asObservable()
    }

}
