import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {

  constructor(public ts:ToasterService) { }
  type: string;
  msg: string;
  showToast: boolean;

callingtoastincomp () {
  this.type = this.ts.type
  this.msg = this.ts.msg
  this.showToast = this.ts.showToast
}
  ngOnInit(): void {
    
  
    
  }



 

}
