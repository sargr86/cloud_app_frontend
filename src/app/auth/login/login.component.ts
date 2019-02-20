import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {patternValidator} from "../../shared/helpers/pattern-validator";
import {GetLangPipe} from "../../shared/pipes/get-lang.pipe";
import {AuthService} from "../../shared/services/auth.service";
import {SaveUserInfoService} from "../../shared/services/save-user-info.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    lang: string = this.getLang.transform();

    constructor(
        public _router: Router,
        public _auth: AuthService,
        private _fb: FormBuilder,
        private getLang: GetLangPipe,
        private _saveInfo: SaveUserInfoService
    ) {
    }

    ngOnInit() {
        // Defining login form fields
        this.loginForm = this._fb.group({
            email: new FormControl(null, {
                validators: [Validators.required, patternValidator()], updateOn: 'blur'
            }),
            password: ['', Validators.required],
            lang: [this.lang as string]
        })
    }

    login(){
        this._auth.login(this.loginForm.value).subscribe(dt => {
            this._saveInfo.do(dt);
        })
    }

    /**
     * E-mail field getter
     * @returns {AbstractControl}
     */
    get email() {
        return this.loginForm.get('email')
    }

    /**
     * Password field getter
     * @returns {AbstractControl}
     */
    get pass() {
        return this.loginForm.get('password');
    }

}
