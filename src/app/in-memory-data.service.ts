import { Injectable } from '@angular/core';
import {InMemoryDbService, ResponseInterceptor, ResponseOptions} from "angular-in-memory-web-api";
import {CodeEnum} from "./core/enum/code.enum";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

    createDb() {
        const user = [
            {
                id: 3,
                name: 'tony',
                password: '123456',
            }
        ];
        const login = [{
            id: 3,
            name: 'tony',
            face: '',
        }];
        return {
            user,
            login,
        }
    }
    responseInterceptor(res: ResponseOptions, ri: ResponseInterceptor) {
        res.body = {
            code: CodeEnum.SUCCESS,
            data: res.body,
        };
        return res;

    }
}
