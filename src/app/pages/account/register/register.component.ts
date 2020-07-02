import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.registerForm = this._fb.group({
            name: [null, Validators.required],
            password: [null, Validators.required],
            confirmPassword: [null, Validators.required],

        });
   }

}
