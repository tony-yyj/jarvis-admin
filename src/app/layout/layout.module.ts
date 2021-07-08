import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [MainComponent, HeaderComponent, FooterComponent, LeftSideComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule
    ]
})
export class LayoutModule { }
