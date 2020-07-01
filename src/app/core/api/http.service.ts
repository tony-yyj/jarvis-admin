import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class HttpService {

    constructor(
        private _http: HttpClient
    ) {
    }

    /**
     * @param url 请求的url
     * @param params get请求的参数
     */
    public get(url, params): Observable<any> {
        return this._http.get(url, {
            responseType: 'json',
            params,
        }).pipe(
            catchError(err => this.handleError(err))
        );
    }

    public getFile(url, params): Observable<any> {
        return this._http.get(url,  {
            params,
            responseType: 'blob',
            observe: 'events',
        }).pipe(
            catchError(err => this.handleError(err))
        );
    }

    /**
     * @param url 请求的url
     * @param params post请求的body数据
     */
    public post(url, params = null): Observable<any> {
        return this._http.post(url, params, {
            responseType: 'json',
        }).pipe(
            catchError(err => this.handleError(err))
        );
    }


    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
            console.log('客户端错误', err.error.message);
            return;
        } else {
            console.log(`后端错误
            错误码为：${err.status}
            错误消息为：${err.message}`);
        }
        return throwError(err);
    }
}
