import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_HOST} from '../constants/settings';

@Injectable({
    providedIn: 'root'
})
export class FilesService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    import(params) {
        return this.httpClient.post(`${API_HOST}files/import`, params);
    }
}
