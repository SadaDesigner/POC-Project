import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataservice:MydataService) { }

  todolist:any = [];

  showBulkActions:boolean = false;
  selectedList:any = [];


  checBoxClick(e, To) {
    this.selectedList.push(To)
    
   if(this.selectedList.length > 1 ) {
    this.showBulkActions = true;
   }
  }
  ngOnInit() {
    this.dataservice.getdata().subscribe(data => this.todolist = data);

  
  }

}
