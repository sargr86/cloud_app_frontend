import {Pipe, PipeTransform} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {
    MAX_FIRST_NAME_LEN,
    MAX_LAST_NAME_LEN,
    MIN_FIRST_NAME_LEN,
    MIN_LAST_NAME_LEN
} from "../constants/form_config";
import {patternValidator} from "../helpers/pattern-validator";
import {GetLangPipe} from "./get-lang.pipe";

@Pipe({
    name: 'userRegistration'
})
export class GetUserRegistrationFieldsPipe implements PipeTransform {

    constructor(
        private getLang: GetLangPipe
    ) {

    }

    /**
     * Returns form fields for user registration form
     * @param {boolean} edit
     * @returns {any}
     */
    transform(edit: boolean = false): any {
        let formFields = {
            birthday: [''],
            gender: ['male'],
            email: new FormControl('',
                {
                    validators: [Validators.required, patternValidator()], updateOn: 'blur'
                }),
            profile_img:'',
            // file:''
        };

        // Setting additional fields for register-user and edit-profile cases
        if(!edit)  formFields['password'] = ['', [Validators.required]];
        else formFields['id'] = [''];

        let lang = this.getLang.transform();
        formFields[`first_name_${lang}`] = ['', [Validators.required, Validators.minLength(MIN_FIRST_NAME_LEN), Validators.maxLength(MAX_FIRST_NAME_LEN)]];
        formFields[`last_name_${lang}`] = ['', [Validators.required, Validators.minLength(MIN_LAST_NAME_LEN), Validators.maxLength(MAX_LAST_NAME_LEN)]];
        formFields['lang'] = lang;

        return formFields;
    }

}





