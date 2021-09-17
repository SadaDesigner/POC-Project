import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MydataService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private dataservice: MydataService) {}
  applicationname = 'Sample Project';

  isFluid: boolean = false;

  showDataInApp: boolean = false;
  showDataSubscription: Subscription;

  ngOnInit() {
    this.showDataSubscription = this.dataservice.showingdataApp.subscribe(
      (data) => {
        this.showDataInApp = data;
      }
    );

   
  }
  ngOnDestroy() {
    this.showDataSubscription.unsubscribe()
  
  }


}
