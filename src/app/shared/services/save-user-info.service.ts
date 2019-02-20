import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import * as jwtDecode from 'jwt-decode';
import {TranslateService} from "@ngx-translate/core";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class SaveUserInfoService {

  constructor(
      private _auth: AuthService,
      private router: Router,
      private translate: TranslateService,
      private toastr: ToastrService
  ) { }

    /**
     * Saves authenticated user data
     * @param dt
     * @param edit
     * @returns {any}
     */
    do(dt,edit) {

        if(!edit){
            this._auth.formProcessing = false;

            // Saving token to browser local storage
            localStorage.setItem('token', (dt.hasOwnProperty('token') ? dt.token : ''));

            // Gets current user data
            this._auth.userData = jwtDecode(localStorage.getItem('token'));

            // Navigate to the home page
            this.router.navigate([this._auth.checkRoles('admin') ? 'admin' : '/']);
            localStorage.setItem('cat_id', '')
        }

        else {

            console.log(this._auth.userData)
            this.router.navigate([this._auth.checkRoles('admin') ? 'admin' : '/']);
            this.translate.get('profile_info_updated').subscribe(tr => {
                this.toastr.success(tr)
            })
        }






    }
}
