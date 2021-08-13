import { Component, OnInit, ViewChild} from '@angular/core';
import { MydataService } from '../mydata.service';
import { AdminComponent } from '../admin/admin.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dataservice: MydataService) {}

  @ViewChild('admin') admincomp:AdminComponent; 
  showBulkActions: boolean = false;
  selectedList: any = [];
  selectedTitle:string;
  titleList:any = [];
  isEdit:boolean = false;

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

  deleteItem(tid) {

    let deleteConfirm = confirm('would you like to delete this item') 

    if(deleteConfirm == true) {
      this.dataservice.removedata(tid).subscribe(
        () => {console.log(this.dataservice.todolist)},
        (error) => {console.log('file not deleted', error)},
        () => {console.log('data deleted successfully')}
        )
    }

    else {
      return;
    }
   
  
  }


  editItem() {
    this.isEdit = true;
   // this.admincomp.isEdit = true;
  }

  showDiv: boolean = false;

  showDivOne: boolean = false;

  showElement(ab) {
    if(ab=='one') {
      this.showDiv = !this.showDiv;
    }
    else {
      this.showDivOne = !this.showDivOne;
    }

  }
  

  
 
  ngOnInit() {
    //this.dataservice.getdata().subscribe(data => this.todolist = data);
    this.dataservice.getdata().subscribe(data => {
      this.dataservice.todolist = data;
        },
        (err) => console.log('error', err),

        () =>  console.log('fetch data msg is success')
        );


      
    


   
  }
}
