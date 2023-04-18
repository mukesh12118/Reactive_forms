import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ContainerOne, ContainerThree, ContainerTwo } from './DynamiComponent/Dynamic-component';
import { DynamicDirective } from './DynamiComponent/dynamic.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {


  title = 'my_basic_app';
  showTogg = true;
  wishText = "This text is from parent component";

  message = ""

  show = true;
  parentToggClick() {
    this.showTogg = !this.showTogg;
  }

  getChildData(data: string) {
    this.message = data
  }

  clickTogg() {
    this.show = !this.show
  }


  // Dynamic container

  component = [ContainerOne, ContainerTwo, ContainerThree];

  @ViewChild(DynamicDirective, { static: true }) AddDynamicRef!: DynamicDirective

  indexVal!: number

  ngOnInit() {
    this.getIndex()
  }

  getIndex() {
    setInterval(() => {
      this.indexVal = Math.floor(Math.random() * this.component.length)
      this.createComp()
    }, 1000)
  }

  createComp() {
    this.AddDynamicRef.viewRef.clear();
    this.AddDynamicRef.viewRef.createComponent(this.component[this.indexVal])
  }

  // Dynamic Images  

  dynamicImageSrc = ""

  loadImage(name: string) {
    this.dynamicImageSrc = name
  }

  // Binding

  bindingSample: string = "This is a sample binding"

  // style binding 

  bg_color = false
  font_size = false



  styleBindClick() {
    this.bg_color = true;
    this.font_size = !this.font_size
    console.log(!this.font_size)

  }
  classObj = {
    font_color: true,
    font_size: this.font_size,
    bg_color: this.bg_color
  }

}
