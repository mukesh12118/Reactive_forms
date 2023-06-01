import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "nameSplitter"
})

export class NameSplitter implements PipeTransform {
    transform(value: any, ...args: any[]) {
        console.log(value.split(""));
        return value.split("");
    }
}