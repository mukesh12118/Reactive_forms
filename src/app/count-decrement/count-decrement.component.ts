import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-decrement',
  template: `<button (click)="onDecrement()">-</button>`,
  styleUrls: ['./count-decrement.component.scss']
})
export class CountDecrementComponent {
  @Input() parentData: any;


  @Output()
  decrementCountEvent: EventEmitter<number> = new EventEmitter<number>();
  count = 0

  onDecrement() {
    let dataToSend = 0
    if (this.parentData === 0) {
      dataToSend = 0
    }
    else {
      dataToSend = this.parentData - 1
    }
    this.decrementCountEvent.emit(dataToSend);
  }
}
