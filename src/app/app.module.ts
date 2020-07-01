import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService } from "./in-memory-data.service";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountModule} from "./pages/account/account.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false},
        ),
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AccountModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
