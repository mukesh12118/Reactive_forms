import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-encapsualtion1',
  templateUrl: './encapsualtion1.component.html',
  styleUrls: ['./encapsualtion1.component.scss'],
})
export class Encapsualtion1Component {
  @Input() parentData: any //data from parent
  @Output() childDataEvent: EventEmitter<string> =
    new EventEmitter<string>();

  passDataToChild() {
    this.childDataEvent.emit("This text is from child Component");
  }
}
