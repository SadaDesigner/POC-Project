import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dataservice: MydataService) {}

  todolist: any = [];

  showBulkActions: boolean = false;
  selectedList: any = [];
  selectedTitle:string;
  titleList:any = [];

  checBoxClick(e, id) {
 
      // check items and push to selected list
      if (e.target.checked) {

        //console.log(id + 'checked');
        this.selectedList.push(id);
        this.selectedTitle = this.todolist[id - 1].title;
        this.titleList.push(this.selectedTitle);

      } else {
        //console.log(id + 'unchecked');
        this.selectedList = this.selectedList.filter((m) => m != id);
        //this.titleList = this.titleList.filter((m) => !this.selectedTitle);
      }

     // console.log(this.todolist[id - 1].title);
      ///////////////////////////////////////


      //show bulk items on multiple checks condition
      if (this.selectedList.length > 1) {
        this.showBulkActions = true;
      } else {
        this.showBulkActions = false;
      }
  }

  ngOnInit() {
    //this.dataservice.getdata().subscribe(data => this.todolist = data);
    this.dataservice.getdata().subscribe((data) => {
      this.todolist = data;
    });
  }
}
