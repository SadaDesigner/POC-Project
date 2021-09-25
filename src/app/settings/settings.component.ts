import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { MydataService } from '../mydata.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {


 
  constructor(private http: HttpClient, private ac:ActivatedRoute, private dataservice:MydataService) { }

  isdatacoming: boolean = true;
  searchString: string = "";
  listResults: any = []
  hello:Subscription

  getdata() {
    const urlofApi = 'https://api.github.com/search/repositories?q=' + this.searchString;
    this.http.get(urlofApi).subscribe(res => {
      this.listResults = res;

      console.log(this.listResults)

    })

  }

  
  sendmyname = {
    name:'bachuwar'
  }

  datafromchild: string; 

  sendoutput(event:any) {
    
    this.datafromchild = event;
  }
  mysubscription:Subscription
  isloginsubscription:any;
  isloginshow: boolean;
  isloginsubsribe() {
    this.isloginsubscription = this.dataservice.isloginevent.subscribe((data) => {
      this.isloginshow = data;
  })
  }



  ngOnInit(): void {


    this.isloginsubsribe()

    this.ac.data.subscribe((data) => {
      console.log('routing data ' + data.role)
    })

    this.mysubscription = interval(1000).subscribe((mycount) => {

      console.log('interval rxjs example ' + mycount)
      if(mycount == 15) {
          this.mysubscription.unsubscribe()
          console.log('interval is unsubscribed')
      }
    }); 
    
  }

  ngOnDestroy() {
    alert('thanks for visiting settings')
    console.log('settins component destroyed')

    this.mysubscription.unsubscribe()
    this.isloginsubscription.unsubscribe()

    
  }


}
