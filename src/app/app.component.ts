import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthserviceService } from './authonticate/authservice.service';
import { MydataService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private dataservice: MydataService, private authservice:AuthserviceService) { }
  applicationname = 'My Project';
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


    //promise practise

    // let mypromise = new Promise(resolve => {
    //   console.log('welcome promise')
    //   resolve('welcomepromise again')
    // })

    // mypromise.then(resolve => {
    //   console.log('resolve ' + resolve)
    // })


    // let myobs = new Observable(observer => {
     
    //   observer.next('welcome observable')
    // })

    // myobs.subscribe(data =>{
    //   console.log('start name:  ' + data)
    // })

  
  }
  ngOnDestroy() {
    this.showDataSubscription.unsubscribe()
    
  }
}
