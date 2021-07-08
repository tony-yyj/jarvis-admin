import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService } from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountModule} from './pages/account/account.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './core/api/interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LayoutModule} from './layout/layout.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {
                dataEncapsulation: false,
                delay: 500,
            },
        ),
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AccountModule,
        LayoutModule,
        MatSnackBarModule,
    ],
    providers: [
        // 拦截器
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
