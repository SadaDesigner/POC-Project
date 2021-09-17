import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters',
  pure: false
})
export class myCustomFilterPipe implements PipeTransform {



  transform(myvalue, mystring: string) {
   if(myvalue.length === 0 || mystring === "") {
   
     return myvalue;
   
   }

   //return myvalue;

   let list = [];
   for(let myname of myvalue) {
    
     if(myname['name'] === mystring) {
 
       list.push(myname)

   
     
     }
   }
  //  alert(myvalue)

   return list;
  }

}

