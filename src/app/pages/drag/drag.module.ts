import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {LayoutModule} from '../../layout/layout.module';
import {DragComponent} from './drag/drag.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ShareModule} from "../../share.module";

const router: Routes = [
    {
        path: 'index',
        component: IndexComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index',
    }
];

@NgModule({
    declarations: [
        IndexComponent,
        DragComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        ShareModule,
    ]
})
export class DragModule {
}
