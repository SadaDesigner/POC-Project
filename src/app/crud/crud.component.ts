import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';
import { EMPLOYEES } from '../model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CrudComponent implements OnInit {

  constructor(public cs:CrudserviceService, private route:Router) { }

employeelist :any =[];
employeelistErrorMsg: string;
employeelistErrorMsgShow: boolean =false;
gridsearch: string ='';


  getEmployees() {
     this.cs.getuser().subscribe(data => {
      this.employeelist = data;
      for(let employee of this.employeelist) {
            if(employee.gender == 1) {
              employee.gender = 'Male'
            }
            else {
              employee.gender = 'Female'
            }
      }
    }
    ,
    (error) => {
      //console.log('error ' + JSON.stringify(error.message))
      if(error) {
        debugger
        this.employeelistErrorMsgShow = true;
        this.employeelistErrorMsg = error.message;
        console.log('error msg ' + this.employeelistErrorMsg)
      }
    }
    )
  }

  deleteEmployee(user) {
    this.cs.deleteuser(user).subscribe(data => {
      this.employeelist = data
    })

    this.getEmployees()
  }

  editEmpoyee(cuserid, cuser) {
    this.cs.editMode = true;
    this.cs.editMode = true;
    this.route.navigate(['/addemployee'])
    this.cs.getCobjId = cuserid;  //sending current id through cuserid parameter to the service
    
    this.cs.prepopulatevalues(cuserid, cuser)
    

   // this.cs.form.setValue(cuser)
    // this.cs.updateuser(userid, cuser).subscribe(data => {
    //   this.employeelist = data
    // })
  }


  gotoAddEmployee() {
    this.cs.editMode = false;
  }



  ngOnInit(): void {
    this.getEmployees()

  }


}
