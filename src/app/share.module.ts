import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDirective} from './core/directives/drag.directive';
import {DropDirective} from './core/directives/drop.directive';

@NgModule({
    declarations: [
        DragDirective,
        DropDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DragDirective,
        DropDirective,
    ]
})
export class ShareModule {
}
