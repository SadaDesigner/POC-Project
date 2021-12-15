import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  BehaviorSubject,
  interval,
  ObjectUnsubscribedError,
  Observable,
  observable,
  of,
  Subject,
} from 'rxjs';
import {
  authResponse,
  AuthserviceService,
} from '../authonticate/authservice.service';
import { User } from '../authonticate/user.model';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('aname') myappname: any;
  @Output() sendchild = new EventEmitter();
  @Input('headerDate') myhdate: Date;
  @Output() sendkid = new EventEmitter();

  constructor(
    private dataservice: MydataService,
    private authservice: AuthserviceService
  ) {}

  username: string = '';
  isAuthenticated: boolean = false;
  loggedUserInfo: User;
  kidname: string = 'shanvika';

  childdata: string = 'sadashiv bachuwar'

  getusername() {
    this.username = prompt('enter username');
  }

  isloginshow: boolean = false;
  Login() {
    this.dataservice.isLoggin();
    //this.isloginshow = this.dataservice.islogin
  }

  Logout() {
    this.dataservice.isLoggin();
  }

  isloginsubscription: any;
  isloginsubsribe() {
    this.isloginsubscription = this.dataservice.isloginevent.subscribe(
      (data) => {
        this.isloginshow = data;
      }
    );
  }
  authLogout() {
    this.authservice.logoutUser();
  }

  getid: any;



  switchmode(element) {   //light theme dark theme switch
    
    let mainhtml = document.querySelector('html');

    if (mainhtml.className == 'light-mode') {
      mainhtml.className = 'dark-mode';
      element.innerHTML = 'switch to light'
    } else {
      mainhtml.className = 'light-mode';
      element.innerHTML = 'switch to dark'
    }

    // if(mainhtml.className =="dark-mode") {
    //   mainhtml.className = 'light-mode'
    // }

    //this.getid = document.getElementById('switch-color');

    // document.getElementByTagName('html').className = 'dark-mode'
    // document.getElementById('idOfElement').className = 'newClassName';
  }



  ngOnInit(): void {
    this.isloginsubsribe();

    //user data coming from authservice using subject
    this.authservice.sendUserSub.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
      this.loggedUserInfo = user;
    });
    this.sendchild.emit(this.childdata)
    this.sendkid.emit(this.kidname)
  }
}
