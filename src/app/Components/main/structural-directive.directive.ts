import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appStructuralDirective]'
})
export class StructuralDirective {
    constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef){
    }
    @Input() set appStructuralDirective(condition){
        condition? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
    }
}