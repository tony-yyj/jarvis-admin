import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    title: string = 'Jarvis Admin';

    loginForm: FormGroup;

    loading: boolean = false;

    constructor(
        private _fb: FormBuilder,
    ) {
    }

    ngOnInit() {
        this.loginForm = this._fb.group({
            name: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    submit() {
        this.loginForm.updateValueAndValidity();
        if (this.loginForm.invalid) {
            // console.log(this.loginForm);
            return;
        }
        console.log('submit');
    }
}
