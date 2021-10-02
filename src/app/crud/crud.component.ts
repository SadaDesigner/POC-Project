import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(public cs:CrudserviceService, private route:Router) { }
employeelist :any;



  getEmployees() {
 
    this.cs.getuser().subscribe(data => {
      this.employeelist = data
    })
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
