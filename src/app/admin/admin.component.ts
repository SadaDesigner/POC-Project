import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dataservice:MydataService) { }
  mydata:any;
  mydatalist:[] = [];
  pos:boolean = true;
 neg:boolean = false;

  employeeFormSubmit(v:NgForm) {
   this.dataservice.todolist.push(v)
   console.log(this.dataservice.todolist)
       
  }

  ngOnInit(): void {

    
  }

}
