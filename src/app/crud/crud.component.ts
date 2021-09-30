import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(public cs:CrudserviceService) { }
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
      this.cs.prepopulatevalues(cuserid, cuser)
    

   // this.cs.form.setValue(cuser)
    // this.cs.updateuser(userid, cuser).subscribe(data => {
    //   this.employeelist = data
    // })
  }

  ngOnInit(): void {

    this.getEmployees()

  }

}
