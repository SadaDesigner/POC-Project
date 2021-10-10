import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }
  type:string;
  msg:string;
  showToast: boolean = false;
  getToster(toastType, toastMsg) {
  
    this.type = toastType;
    this.msg = toastMsg
  //  this.showToast = true;

  setTimeout(()=> {
      this.showToast = true
    }, 2000)

    setTimeout(()=> {
      this.showToast = false
    }, 8000)
    
  }
}
