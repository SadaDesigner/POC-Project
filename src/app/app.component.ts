import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthserviceService } from './authonticate/authservice.service';
import { MydataService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private dataservice: MydataService, private authservice:AuthserviceService) { }
  applicationname = 'Sample Project';
  isFluid: boolean = false;
  showDataInApp: any = false;
  showDataSubscription: Subscription;
  isloginshow: boolean;
  truncatevalue: string = "hello friends how are you all"

  ngOnInit() {
    this.showDataSubscription = this.dataservice.showingdataApp.subscribe(
      (data) => {
        this.showDataInApp = data;
      }
    );

    //  this.isloginshow = this.dataservice.islogin

    this.authservice.autoLogin()

  
  }
  ngOnDestroy() {
    this.showDataSubscription.unsubscribe()
    
  }
}
