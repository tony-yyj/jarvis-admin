import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-drag',
    templateUrl: './drag.component.html',
    styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit, AfterViewInit {

    @ViewChild('dragArea') dragArea: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        console.log(this.dragArea.nativeElement);
    }



}
