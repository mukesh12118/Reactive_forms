import { Component } from '@angular/core';

@Component({
  selector: 'app-child-get-set-component',
  template: `<div>
  <h3 class="hello_host">Hello world</h3>
  <h3 class="hello_host">Hello world</h3>
  <h3>Hello world</h3>
  <h3>Hello world</h3>
</div>`,
  styleUrls: ["./child-get-set-component.component.scss"]
})
export class ChildGetSetComponentComponent {
  count: number = 0;
}
