import { Pipe, PipeTransform  } from "@angular/core";
@Pipe({
    name: 'filterPipe'
})
export class filterPipe implements PipeTransform {
    transform(value, parameter) {
            if(value.length > parameter) {
                    return value.substr(0, parameter) + '...'
            }
            else {
                return value;
            }
        }

}