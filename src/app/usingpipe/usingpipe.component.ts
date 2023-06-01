import { Component } from '@angular/core';

@Component({
  selector: 'app-usingpipe',
  templateUrl: './usingpipe.component.html',
  styleUrls: ['./usingpipe.component.scss']
})
export class UsingpipeComponent {

  mydate = new Date;
  checkUppercase = "valUetOchecKEd";
  checkTitle = "pirate of the carribean";
  checkCurrency = 45623434.4545;
  checkPercent = 0.185;


  fontSize = false;
  color = true;
  style = false

  styleInline() {
    return {
      "font-size": this.fontSize ? "17px" : "25px",
      "background-color": this.color ? "green" : "#FCC00E",
      "font-style": this.style ? "normal" : "italic"
    }
  }

  changeClass() {
    this.fontSize = !this.fontSize;
    this.color = !this.color;
    this.style = !this.color;
    this.styleInline()
  }

}
