import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material.module";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {TranslateModule} from "@ngx-translate/core";
import {InfoBoxComponent} from "./components/info-box/info-box.component";
import {GetLangPipe} from './pipes/get-lang.pipe';
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {GetImageUrlPipe} from './pipes/get-image-url.pipe';
import {GetUserRegistrationFieldsPipe} from './pipes/get-user-registration-fields.pipe';
import {FixMatDatepickerDateFormatPipe} from './pipes/fix-mat-datepicker-date-format.pipe';
import {SetMatDatepickerAdapterLocalePipe} from './pipes/set-mat-datepicker-adapter-locale.pipe';
import {LanguagesComponent} from './components/languages/languages.component';
import {ReplaceAllPipe} from './pipes/replace-all.pipe';
import {MaterialReusableTableComponent} from './components/material-reusable-table/material-reusable-table.component';
import {GetMatTableDataSourcePipe} from './pipes/get-mat-table-data-source.pipe';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
    declarations: [
        NotFoundComponent,
        InfoBoxComponent,
        GetLangPipe,
        GetImageUrlPipe,
        GetUserRegistrationFieldsPipe,
        FixMatDatepickerDateFormatPipe,
        SetMatDatepickerAdapterLocalePipe,
        LanguagesComponent,
        ReplaceAllPipe,
        MaterialReusableTableComponent,
        GetMatTableDataSourcePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule,
        DropzoneModule,
        NgSelectModule
    ],
    providers: [
        GetLangPipe,
        GetImageUrlPipe,
        ReplaceAllPipe,
        GetUserRegistrationFieldsPipe,
        FixMatDatepickerDateFormatPipe,
        SetMatDatepickerAdapterLocalePipe,
        GetMatTableDataSourcePipe
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule,
        DropzoneModule,
        NgSelectModule,
        InfoBoxComponent,
        LanguagesComponent,
        MaterialReusableTableComponent,
        GetLangPipe,
        GetImageUrlPipe,
    ]
})
export class SharedModule {
}
