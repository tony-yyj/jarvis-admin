import {Injectable} from "@angular/core";
import {HttpService} from "../api/http.service";
import {UrlService} from "../api/url.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AccountService {

    constructor(
        private _http: HttpService,
        private _url: UrlService,
    ) {
    }

    login(params: {
        name: string;
        password: string;
    }): Observable<any> {
        return this._http.post(this._url.api.Account.login, params);
    }
}
