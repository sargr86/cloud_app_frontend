import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class SaveUserInfoService {

  constructor(
      private _auth: AuthService,
      private router: Router
  ) { }

    /**
     * Saves authenticated user data
     * @param dt
     * @returns {any}
     */
    do(dt) {

        this._auth.formProcessing = false;

        // Saving token to browser local storage
        localStorage.setItem('token', (dt.hasOwnProperty('token') ? dt.token : ''));

        // Gets current user data
        this._auth.userData = jwtDecode(localStorage.getItem('token'));

        // Navigate to the home page
        this.router.navigate([this._auth.checkRoles('admin') ? 'admin' : '/']);
        localStorage.setItem('cat_id', '')
    }
}
