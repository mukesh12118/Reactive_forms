import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CounterComponentComponent {

  countData: number = 0;

  getDecrementData(data: number) {
    this.countData = data
  }
  getIncrementData(data: number) {
    this.countData = data
  }
}
