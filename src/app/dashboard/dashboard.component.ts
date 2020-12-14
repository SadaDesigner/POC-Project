import { Component, OnInit, ViewChild } from '@angular/core';
import { MydataService } from '../mydata.service';
import { AdminComponent } from '../admin/admin.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dataservice: MydataService) {}

  @ViewChild(AdminComponent)  admincomp:AdminComponent;

  

  showBulkActions: boolean = false;
  selectedList: any = [];
  selectedTitle:string;
  titleList:any = [];

  checBoxClick(e, id, title) {
 
      // check items and push to selected list
      if (e.target.checked) {

        //console.log(id + 'checked');
        this.selectedList.push(id);
        //this.selectedTitle = title;
        this.titleList.push(title);

        console.log(this.selectedList);
        console.log(this.titleList);

      } else {
        debugger;
        //console.log(id + 'unchecked');
  
       this.selectedList = this.selectedList.filter((m) => m != id);
        this.titleList = this.titleList.filter((b) => b !=title);


        console.log(this.selectedList);
        console.log(this.titleList);
        
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

  deletedata(id) {
    this.dataservice.removedata(id).subscribe((mydata) => {console.log(mydata)})
  }

  ngOnInit() {
    //this.dataservice.getdata().subscribe(data => this.todolist = data);
    this.dataservice.getdata().subscribe((data) => {
      
      this.dataservice.todolist = data;

   
    });
    


   
  }
}
