import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { IndexComponent } from './index/index.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

const router: Routes = [
    {
        path: '',
        component: IndexComponent,
    }
]


@NgModule({
  declarations: [IndexComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class DashboardModule { }
