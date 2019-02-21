import { Pipe, PipeTransform } from '@angular/core';
import {MatTableDataSource} from "@angular/material";

@Pipe({
    name: 'dataSource'
})
export class GetMatTableDataSourcePipe implements PipeTransform {

    /**
     * Returns passed data as material table source
     * @param data
     * @returns {any}
     */
    transform(data: any): any {
        return new MatTableDataSource(data);
    }

}
