import { Component, OnInit, ViewChild} from '@angular/core';
import { MydataService } from '../mydata.service';
import {NgForm} from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dataservice:MydataService) { }

  @ViewChild('dashboard') dashboardcomp:DashboardComponent; 
  mydata:any;
  mydatalist:[] = [];
  pos:boolean = true;
  neg:boolean = false;
  isEdit:boolean = false;

  employeeFormSubmit(v:NgForm) {
   this.dataservice.todolist.push(v)
   console.log(this.dataservice.todolist);


       
  }


  ngOnInit(): void {

    
  }

}
