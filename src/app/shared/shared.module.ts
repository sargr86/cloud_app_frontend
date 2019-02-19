import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material.module";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {TranslateModule} from "@ngx-translate/core";
import {InfoBoxComponent} from "./components/info-box/info-box.component";
import { GetLangPipe } from './pipes/get-lang.pipe';
import {DropzoneModule} from "ngx-dropzone-wrapper";
import { GetImageUrlPipe } from './pipes/get-image-url.pipe';
import { GetUserRegistrationFieldsPipe } from './pipes/get-user-registration-fields.pipe';

@NgModule({
    declarations: [
        NotFoundComponent,
        InfoBoxComponent,
        GetLangPipe,
        GetImageUrlPipe,
        GetUserRegistrationFieldsPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule,
        DropzoneModule
    ],
    providers:[
        GetLangPipe,
        GetImageUrlPipe,
        GetUserRegistrationFieldsPipe
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule,
        DropzoneModule,
        InfoBoxComponent,
        GetLangPipe,
        GetImageUrlPipe,
    ]
})
export class SharedModule {
}