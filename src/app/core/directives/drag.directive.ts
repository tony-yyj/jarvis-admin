import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {getDpi} from '../../utils/common';

@Directive({
    selector: '[appDrag]'
})
export class DragDirective {
    @Input() componentType: string = null;
    // 拖动占位符
    @Input() dragPlaceholder: HTMLCanvasElement;

    canvasConfig = {
        width: 100,
        height: 50,
    };


    constructor(el: ElementRef) {
        el.nativeElement.setAttribute('draggable', true);
        el.nativeElement.style.cursor = 'move';
    }

    @HostListener('dragstart', ['$event'])
    dragstart(e) {
        const dt = e.dataTransfer;
        dt.effectAllowed = 'copy';
        dt.setData('text/plain', this.componentType);
        this.dragWidthCustomerImage(e);
    }

    // 拖拽完成
    @HostListener('dragend', ['$event'])
    dragend(e) {
        this.resetCanvas(this.dragPlaceholder);
    }

    dragWidthCustomerImage(event) {
        this.drawCanvas(this.dragPlaceholder, this.componentType);
        event.dataTransfer.setDragImage(this.dragPlaceholder, 25, 25);
    }

    drawCanvas(canvasEl: HTMLCanvasElement, text: string) {
        const ratio = getDpi();
        canvasEl.style.width = this.canvasConfig.width + 'px';
        canvasEl.style.height = this.canvasConfig.height + 'px';

        canvasEl.width = this.canvasConfig.width * ratio;
        canvasEl.height = this.canvasConfig.height * ratio;
        const context = canvasEl.getContext('2d');
        context.clearRect(0, 0, canvasEl.width, canvasEl.height);
        context.fillStyle = '#999';
        context.fillRect(0, 0, canvasEl.width, canvasEl.height);
        // 放置文字
        context.fillStyle = '#fff';
        const fontSize = 14;
        context.font = `${fontSize * ratio}px Arial`;
        context.fillText(text, 0, canvasEl.height / 2);
    }

    resetCanvas(canvasEl) {
        canvasEl.style.width = '0px';
        canvasEl.style.height = '0px';
        canvasEl.width = 0;
        canvasEl.height = 0;
    }
}
