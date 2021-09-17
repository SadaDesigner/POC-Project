import { Pipe, PipeTransform  } from "@angular/core";
import { pipe } from "rxjs";


@Pipe({
    name: 'mycustompipe'
})
export class myCustomPipe implements PipeTransform {
    transform(value, parameter) {

        if(value.length > parameter) {
            return value.substr(0, parameter) + ' ...';
        }
        else {
            return value;
        }
        
    }

}