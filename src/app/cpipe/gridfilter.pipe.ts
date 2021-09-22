import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'gridfilter',
    pure: false
})
export class gridFilter implements PipeTransform {


    transform(value) {

        let married = this.getmarried
        let younger = this.getyounger
        let elder = this.getelder
 
        //return value.filter(elder)
        return value;

    }

    getmarried(m) {
       if(m.married) {
           return m;
       }
    }

    getyounger(m) {
        if(m.age < 19) {
            return m;
        }
     }
     getelder(m) {
        if(m.age > 19) {
            return m;
        }
     }
  
}