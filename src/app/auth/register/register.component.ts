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
import {FixMatDatepickerDateFormatPipe} from "../../shared/pipes/fix-mat-datepicker-date-format.pipe";
import {SetMatDatepickerAdapterLocalePipe} from "../../shared/pipes/set-mat-datepicker-adapter-locale.pipe";


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
        private fixDpFormat: FixMatDatepickerDateFormatPipe,
        private setAdapterLang: SetMatDatepickerAdapterLocalePipe
    ) {
        // Getting form fields and drop zone config
        this.fieldsConfig = fc;
        this.dropzoneConfig = dropzoneConfig.USER_PROFILE_IMG_DROPZONE_CONFIG;

        // Setting material date picker locale and current form language equal to last saved one
        this.lang = this.getLang.transform();
        this.setAdapterLang.transform(this.adapter,this.lang);
    }

    ngOnInit() {
        this.registerForm = this._fb.group(this.getFormFields.transform())
    }




    /**
     * Sends user registration data to the auth service
     */
    register() {

        // Fixing birthday value date format to meet our needs
        this.fixDpFormat.transform(this.birthdayField);


        // If registration or profile editing form is valid saving its data to formData object
        // if (this.registerForm.valid) {
        this._auth.formProcessing = true;

        console.log(this.registerForm.value)




    }

    /**
     * First name field control getter
     * @returns {AbstractControl}
     */
    get firstName() {
        return this.registerForm.get(`first_name_${this.lang}`);
    }

    /**
     * Last name field control getter
     * @returns {AbstractControl}
     */
    get lastName(): AbstractControl {
        return this.registerForm.get(`last_name_${this.lang}`);
    }

    get birthdayField(){
        return this.registerForm.get('birthday');
    }

    /**
     * E-mail field getter
     * @returns {AbstractControl}
     */
    get email(): AbstractControl {
        return this.registerForm.get('email');
    }

    /**
     * Password field getter
     * @returns {AbstractControl}
     */
    get pass(): AbstractControl {
        return this.registerForm.get('password')
    }

    /**
     * Gets profile image name if exists
     * @returns {any}
     */
    get profileImg(): any {
        return this.userData ? this.userData.profile_img : false;
    }


}
