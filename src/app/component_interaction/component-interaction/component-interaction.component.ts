import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildGetSetComponentComponent } from './child-get-set-component/child-get-set-component.component';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent {

  @ViewChild("nameInp") nameElementRef!: ElementRef;
  message = ""

  onInpClick() {
    console.log(this.nameElementRef)
    this.message = "Hi! " + this.nameElementRef.nativeElement.value
    this.nameElementRef.nativeElement.value = ""
  }

  getValue: string = "";
  getInpChange() {
    console.log(this.getValue)
  }

  // view child from child component

  @ViewChild(ChildGetSetComponentComponent, { static: true }) childInpRef!: ChildGetSetComponentComponent;

}
