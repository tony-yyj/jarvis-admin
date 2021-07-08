import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import uuid from '../../../utils/uuid';
import guid from '../../../utils/uuid';
import {DropDataInterface} from "../../../core/interfaces/drag.interface";

@Component({
    selector: 'app-drag',
    templateUrl: './drag.component.html',
    styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit, AfterViewInit {
    componentList: { id: string, type: string }[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.componentList.push({
            id: uuid(),
            type: 'empty',
        });
    }

    ngAfterViewInit() {
    }

    getDropEvent(data: DropDataInterface) {
        // 首先根据id找到索引
        const idx = this.componentList.findIndex(item => item.id === data.currentAreaInfo.id);
        // 保证前后都有可插入区域
        this.componentList.splice(idx + 1, 0,
            {id: guid(), type: data.component},
            {id: guid(), type: 'empty'},
        );
    }


}
