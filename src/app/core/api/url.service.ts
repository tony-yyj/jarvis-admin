import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class UrlService {
    public api = {
        Account: {
            login: 'api/login',
        }
    }

    constructor() {
        for (const module of Object.keys(this.api)) {
            for (const key of Object.keys(this.api[module])) {
                this.api[module][key] = environment.apiUrl + this.api[module][key];
            }
        }
    }

}
