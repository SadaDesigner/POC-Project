import { Component, OnInit, ViewChild } from '@angular/core';
import { MydataService } from '../mydata.service';
import { AdminComponent } from '../admin/admin.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ToasterService } from '../shared/toaster.service';
import { AuthserviceService } from '../authonticate/authservice.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dataservice: MydataService,
     private route: Router,
     private ac: ActivatedRoute,
     public ts:ToasterService,
     private authservice: AuthserviceService
     ) { }

  @ViewChild('admin') admincomp: AdminComponent;
  showBulkActions: boolean = false;
  selectedList: any = [];
  selectedTitle: string;
  titleList: any = [];
  isEdit: boolean = false;
  showDiv: boolean = false;
  searchTextBox: any;
  showDivOne: boolean = false;
  errmsg: boolean = false;
  todolist: any = [];
  isLoading: boolean = false;
  childElementValue: string =  'value coming from child component'




  employeedetails: any = {
    name: 'sadashiv', age: 32, role: 'uideveloper'
  }


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

      //console.log(id + 'unchecked');

      this.selectedList = this.selectedList.filter((m) => m != id);
      this.titleList = this.titleList.filter((b) => b != title);


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

  deleteItem(tid, index) {

    let deleteConfirm = confirm('would you like to delete this item')

    if (deleteConfirm == true) {
      this.dataservice.removedata(tid).subscribe(
        (data) => {


          this.todolist.splice(index, 1)
          console.log(this.todolist)
        },
        (error) => { console.log('file not deleted', error) },
        () => { console.log('data deleted successfully') }
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



  datashowInApp() {

    this.dataservice.showingData();


  }
  // gotoquery() {
  //   this.route.navigate(['/dashboard/postdetails', 5, 'sadashiv'], {queryParams: this.employeedetails})
  // }




  ngOnInit() {
    this.isLoading = true;
  
 
    // this.ac.data.subscribe((data) => {
    //   console.log('routing data' + data.name)
    // });

    this.ac.data
    .pipe(map(data => {
     if(true) {
   
        return data.name.substring(0,1)
     }
    }))

    .subscribe(data => {
      console.log('check' + data.name)
    })






    //this.dataservice.getdata().subscribe(data => this.todolist = data);

    this.dataservice.getdata().subscribe(data => {
      this.isLoading = false;
      this.dataservice.todolist = data;

    },
      (err) => {
        console.log('error', err)
        if (err.name == "HttpErrorResponse") {
          this.errmsg = true;
        }
      },

      () => console.log(this.todolist)
    );

  }


}
