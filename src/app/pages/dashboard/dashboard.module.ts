import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { IndexComponent } from './index/index.component';

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
  ]
})
export class DashboardModule { }
