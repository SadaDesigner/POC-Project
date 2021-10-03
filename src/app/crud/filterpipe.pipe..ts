import { Pipe, PipeTransform  } from "@angular/core";
@Pipe({
    name: 'empFilter'
})
export class filterPipe implements PipeTransform  {
    // transform(value, parameter) {
    //         if(value.length > parameter) {
    //                 return value.substr(0, parameter) + '...'
    //         }
    //         else {
    //             return value;
    //         }
    //     }

        // transform(value) {
        //     var num1 = value.substring(0,3);
        //      var num2 = value.substring(3,6);
        //     var num3 = value.substring(6,10);
        //     return num1 + "-" + num2 + "-"+  num3
    
        // }


        transform(value:any, term: string) {
          
                if(value.length === 0 || term === '') {
                    return value
                }
                // if(term === '') {
                //     return value
                // } doubt


                const employeelist = []
                for(let employee of  value) {
                    if(employee.fullname === term) {
                      employeelist.push(employee)
                    }

                }
               
                
                return employeelist;
              
                
                
           
          } 

         


}