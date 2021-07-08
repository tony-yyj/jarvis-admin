import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../../core/services/account.service';
import {CodeEnum} from '../../../core/enum/code.enum';
import {TipsService} from '../../../core/services/tips.service';
import {Router} from '@angular/router';

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
        private _router: Router,
        private _accountApi: AccountService,
        private _tipsApi: TipsService,
    ) {
    }

    ngOnInit() {
        this.loginForm = this._fb.group({
            name: ['tony', [Validators.required]],
            password: ['123456', [Validators.required]],
        });
    }

    submit() {
        this.loginForm.updateValueAndValidity();
        if (this.loginForm.invalid) {
            // console.log(this.loginForm);
            return;
        }
        this.loading = true;
        this._accountApi.login(this.loginForm.getRawValue()).subscribe(res => {
            this.loading = false;
            if (res.code === CodeEnum.SUCCESS) {
                this._tipsApi.success('登录成功');
                this._router.navigateByUrl('/');
            }
        })
    }
}
