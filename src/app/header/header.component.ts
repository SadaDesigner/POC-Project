import { Component, OnInit, Input } from '@angular/core';
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

  isloginshow: boolean;
  Login() {
    this.dataservice.isLoggin()
    this.isloginshow = this.dataservice.islogin

  }

  Logout() {
    this.dataservice.isLogout()
    this.isloginshow = this.dataservice.islogin
  }
  ngOnInit(): void {
  }

}
