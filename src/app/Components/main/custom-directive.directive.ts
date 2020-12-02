import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector:'[appCustomDirective]'
})
export class HighlightCustomDirective implements OnInit {
    @Input() defaultColor = 'gray';
    @Input() highlightColor = 'black';
    @HostBinding('style.color') color:string;
    constructor(private elementRef:ElementRef, private renderer:Renderer2){}
    ngOnInit(){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color' , 'gray');
    }
    @HostListener('mouseenter') mouseover(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color' , 'gray');
        this.color = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color' , 'black');
        this.color = this.defaultColor;
    }
}