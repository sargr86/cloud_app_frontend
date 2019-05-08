import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilesRoutingModule} from './files-routing.module';
import {ImportFilesComponent} from './import-files/import-files.component';
import {ShowFilesComponent} from './show-files/show-files.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [ImportFilesComponent, ShowFilesComponent],
    imports: [
        CommonModule,
        FilesRoutingModule,
        SharedModule
    ]
})
export class FilesModule {
}
