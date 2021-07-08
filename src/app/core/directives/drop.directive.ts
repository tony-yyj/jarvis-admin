import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appDrop]'
})
export class DropDirective {

    el: ElementRef;
    divBefore: HTMLElement;
    divRear: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el;
        this.divRear = DropDirective.getPlaceholderAreaEl();
        this.divBefore = DropDirective.getPlaceholderAreaEl();
        // this.el.nativeElement.appendChild(this.divBefore);
        // this.el.nativeElement.appendChild(this.divRear);
    }

    static getPlaceholderAreaEl() {
        const div = document.createElement('div');
        div.style.width = '100%';
        div.style.height = '40px';
        div.style.border = '1px solid #ccc';
        return div;
    }

    @HostListener('dragover', ['$event'])
    dragOver(e) {
        // e.target.style.border = 'solid black';
        e.preventDefault();
        return false;
    }

    @HostListener('drop', ['$event'])
    drop(e) {
        console.log(e);
        e.preventDefault();
        const text = e.dataTransfer.getData('text');
        console.log(text);
        const p = document.createElement('p');
        p.innerText = text;
        this.el.nativeElement.appendChild(p);
    }

    @HostListener('dragenter', ['$event'])
    dragenter(e) {
        console.log('x', e.offsetX, 'y', e.offsetY);
    }


}
