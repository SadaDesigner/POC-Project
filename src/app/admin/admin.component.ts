import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MydataService } from '../mydata.service';
import {NgForm} from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(public dataservice:MydataService, private ac:ActivatedRoute) { }

  @ViewChild('dashboard') dashboardcomp:DashboardComponent; 
  mydata:any;
  mydatalist:[] = [];
  pos:boolean = true;
  neg:boolean = false;
  isEdit:boolean = false;

  myname:any;




  employeeFormSubmit(v:NgForm) {
   this.dataservice.todolist.push(v)
   console.log(this.dataservice.todolist);
   
  }

  mysub:Subscription;
  digit: number;
  response:any;
  error:any;
  timeup:string ="time up";
  showtimeup: boolean = false;

  showerror: boolean;
  mycustomObserve: any;

  startCount() {
    this.showerror = false;

    this.myname = this.ac.snapshot.params['title'];

    //Observer practise

    this.mycustomObserve = Observable.create((Obs) => {
      let count = 0;
      let employee = {name:'sadashiv', age:32}

      setInterval(() => {
        Obs.next(count, employee)  //doubt    //go and send the data

        if (count == this.digit) {
          Obs.error('count is stopped at ' + count)
        }

        if (count > 10) {
          Obs.complete('condition completed')
        }
        count++;
        return employee
      }, 1000)
    })
    //observable operators practice
    this.mysub = this.mycustomObserve.pipe(filter((data) => {
      if (data > 0) {
        return true;
      }
    }), map((data: number) => {
      return 'count is ' + (data);
    })).subscribe((data) => {
      this.response = data;
      console.log(data)
    },
      error => {
        this.showerror = true;
        this.error = error;
        console.log(error)
      },
      () => {
        this.showtimeup = true;
        console.log(this.timeup)
      }
    )

  }

  resetCount() {
    this.digit = undefined;
  }
  ngOnInit(): void {


  }

  ngOnDestroy() {
    this.mysub.unsubscribe();
    
    
    console.log('ng destroy works')
  }

}
