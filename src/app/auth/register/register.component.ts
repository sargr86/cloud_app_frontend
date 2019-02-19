import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    profileImg: File;

    constructor(
        private _fb: FormBuilder,
        private _auth: AuthService
    ) {
    }

    ngOnInit() {
      console.log("OK")
        this.registerForm = this._fb.group({
            profile_img: [''],
            foo:['bar']
        })
    }

    getFile(e) {
        this.profileImg = e.target.files[0];
    }

    upload() {
        const formData: FormData = new FormData();
        if(this.profileImg) formData.append('profile_img', this.profileImg, this.profileImg['name'])
        formData.append('foo',this.registerForm.value['foo'])

        this._auth.register(formData).subscribe(dt => {

        });
    }

}
