import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appDrag]'
})
export class DragDirective {
    el: ElementRef;

    static dragWidthCustomerImage(event) {
        // const canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas') as HTMLCanvasElement;
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 50;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 4;
        ctx.moveTo(0, 0);
        ctx.lineTo(50, 50);
        ctx.moveTo(0, 50);
        ctx.lineTo(50, 0);
        ctx.stroke();
        const dt = event.dataTransfer;
        dt.setData('text/plain', 'Data to Drag');
        dt.setDragImage(canvas, 25, 25);
    }

    constructor(el: ElementRef) {
        this.el = el;
        this.el.nativeElement.setAttribute('draggable', true);
        this.el.nativeElement.style.cursor = 'move';
    }

    @HostListener('dragstart', ['$event'])
    dragstart(e) {
        const dt = e.dataTransfer;
        dt.effectAllowed = 'copy';
        dt.setData('text/plain', 'this text may be dragged');
        // DragDirective.dragWidthCustomerImage(e);
    }

}
