import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-increment',
  template: `<button (click)="onDecrement()">+</button>`,
  styleUrls: ['./count-increment.component.scss']
})
export class CountIncrementComponent {

  @Input() parentData: any
  @Output() incrementDataEvent: EventEmitter<number> = new EventEmitter<number>()

  onDecrement() {
    this.incrementDataEvent.emit(this.parentData + 1)
  }
}
