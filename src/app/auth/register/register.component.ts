import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";


import {dpFormats, dpProviders} from '../../shared/constants/datepicker-formats';
import {DateAdapter} from "@angular/material";

import * as fc from "../../shared/constants/form_config";

import * as dropzoneConfig from '../../shared/constants/dropzone';
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";

import {AuthService} from "../../shared/services/auth.service";

import {GetLangPipe} from "../../shared/pipes/get-lang.pipe";
import {GetUserRegistrationFieldsPipe} from "../../shared/pipes/get-user-registration-fields.pipe";
import {User} from "../../shared/models/User";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: dpProviders
})
export class RegisterComponent implements OnInit {

    lang = this.getLang.transform();

    registerForm: FormGroup;
    userData:User;
    fieldsConfig;

    dropzoneConfig: DropzoneConfigInterface;
    dropzoneFile: File;


    constructor(
        private _fb: FormBuilder,
        private _auth: AuthService,
        private getLang: GetLangPipe,
        private adapter: DateAdapter<any>,
        private getFormFields: GetUserRegistrationFieldsPipe,
    ) {
        // Getting form fields and drop zone config
        this.fieldsConfig = fc;
        this.dropzoneConfig = dropzoneConfig.USER_PROFILE_IMG_DROPZONE_CONFIG;
    }

    ngOnInit() {
        this.registerForm = this._fb.group(this.getFormFields.transform())
    }


    /**
     * Setting date picker locale here
     * @param lang
     */
    setAdapterLang(lang) {
        this.adapter.setLocale(lang === 'hy' ? 'hy-AM' : lang);
    }


    /**
     * First name field control getter
     * @returns {AbstractControl}
     */
    get firstName() {
        return this.registerForm.controls[`first_name_${this.lang}`];
    }

    /**
     * Last name field control getter
     * @returns {AbstractControl}
     */
    get lastName(): AbstractControl {
        return this.registerForm.controls[`last_name_${this.lang}`];
    }

    /**
     * E-mail field getter
     * @returns {AbstractControl}
     */
    get email(): AbstractControl {
        return this.registerForm.controls['email']
    }

    /**
     * Password field getter
     * @returns {AbstractControl}
     */
    get pass(): AbstractControl {
        return this.registerForm.controls['password']
    }

    /**
     * Gets profile image name if exists
     * @returns {any}
     */
    get profileImg(): any {
        return this.userData ? this.userData.profile_img : false;
    }


}
