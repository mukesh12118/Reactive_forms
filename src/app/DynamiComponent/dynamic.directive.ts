import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[AddDynamicHost]',

})

export class DynamicDirective {
    constructor(public viewRef: ViewContainerRef) {

    }
}