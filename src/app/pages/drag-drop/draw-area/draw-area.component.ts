import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DropDataInterface} from '../../../core/interfaces/drag.interface';
import guid from '../../../utils/uuid';

@Component({
    selector: 'app-draw-area',
    templateUrl: './draw-area.component.html',
    styleUrls: ['./draw-area.component.scss']
})
export class DrawAreaComponent implements OnInit, AfterViewInit {
    componentList: { id: string, type: string }[] = [];

    ngOnInit(): void {
        this.componentList.push({
            id: guid(),
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
