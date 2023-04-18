import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from "@angular/core";

@Component({
    selector: "Lifecycle",
    templateUrl: "./Lifecycle.component.html",
    styleUrls: ["./Lifecycle.component.scss"]
})

export class LifecycleComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

    ngOnChanges() {
        console.log("onchange")
    }
    ngOnInit() {
        console.log("OnInit Lifecycle");
    }
    ngDoCheck() {
        console.log("DOCheck")
    }

    ngOnDestroy() {
        console.log("Destroyed lifecycle")
    }
}