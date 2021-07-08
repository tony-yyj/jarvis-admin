import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DragComponent} from './drag/drag.component';

const router: Routes = [
    {
        path: '',
        redirectTo: 'drag',
        pathMatch: 'full',
    },
    {
        path: 'index',
        component: IndexComponent,
    },
    {
        path: 'drag',
        component: DragComponent,
    }
];


@NgModule({
    declarations: [IndexComponent, DragComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class DashboardModule {
}
