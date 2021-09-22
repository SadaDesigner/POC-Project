import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value, num) {
       if(value.length > num) {
            return value.substr(0, num).toUpperCase() + '...'
       }

       else {
           return value;
       }
    }
    
}