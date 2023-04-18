import { Component } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent {

  isContentLoad: boolean = false;

  onclickRender() {
    this.isContentLoad = !this.isContentLoad;

    setInterval(() => {
      // let test = Math.floor(Math.random() * 5) + 1
      // console.log(test)
    }, 1000)
  }

}
