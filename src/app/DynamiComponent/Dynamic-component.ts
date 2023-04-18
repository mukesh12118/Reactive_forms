import { Component } from "@angular/core";

@Component({
    selector: "Container1",
    template: `<p>One</p>`,
    styleUrls: ['./Dynamic-component.scss']
})

export class ContainerOne {

}

@Component({
    selector: "Container2",
    template: `<p>Two</p>`,
    styles: ['p {  padding: 20px;background-color: green;max-width: 20%; }']
})

export class ContainerTwo {

}


@Component({
    selector: "Container3",
    template: `<p>Three</p>`,
    styles: ['p {  padding: 20px;background-color: lightblue;max-width: 20%; }']
})

export class ContainerThree {

}
