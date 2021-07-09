import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {DrawAreaComponent} from './draw-area/draw-area.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutModule} from "../../layout/layout.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ToolListComponent } from './tool-list/tool-list.component';
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
        DrawAreaComponent,
        ToolListComponent
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
export class DragDropModule {
}
