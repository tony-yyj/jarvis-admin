import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarRef, SimpleSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class TipsService {
    // 三秒后结束
    private _durationInSeconds: number = 3;

    constructor(
        private _snackBar: MatSnackBar,
    ) {
    }

    error(message) {
        this._snackBar.open(message, '( º﹃º )', {
            duration: this._durationInSeconds * 1000,
            verticalPosition: 'top',
        });
    }

    /**
     * 成功的提示
     * @param message
     * @param duration
     */
    success(message, duration: number = 1000): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(message, 'ヽ(●´∀`●)ﾉ', {
            duration,
            verticalPosition: 'top',
        });
    }
}
