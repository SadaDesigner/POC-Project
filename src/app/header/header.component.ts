import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, interval, ObjectUnsubscribedError, Observable, observable, of, Subject } from 'rxjs';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input ('aname') myappname:any;

  constructor(private dataservice: MydataService) { }

  username: string = "";

  getusername() {
  this.username = prompt('enter username')
  }

  isloginshow: boolean = false
  Login() {
    this.dataservice.isLoggin();
    //this.isloginshow = this.dataservice.islogin
  }

  Logout() {
    this.dataservice.isLoggin()
  
  }


  isloginsubscription:any; 
  isloginsubsribe() {
    this.isloginsubscription = this.dataservice.isloginevent.subscribe((data) => {
      this.isloginshow = data;
  
  })
  
  }


  ngOnInit(): void {
    this.isloginsubsribe()


       
  


    }
 

}
