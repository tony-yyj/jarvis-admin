import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ShareModule} from '../../share.module';

const router: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
    },
    {
        path: 'index',
        component: IndexComponent,
    },
];


@NgModule({
    declarations: [IndexComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        ShareModule,
    ]
})
export class DashboardModule {
}
