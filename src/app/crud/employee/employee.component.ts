import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CrudserviceService } from 'src/app/crudservice.service';
import { CrudComponent } from '../crud.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public cs:CrudserviceService) { }


  @Input('employeelist') employeelist:any;
  @Input('employee') employee:any;
 


  @ViewChild('CrudComponent') crudcomponent:CrudComponent;
  ngOnInit(): void {

  }

  onClick() {
    this.cs.form.reset()
  }

 
  formSubmit(form) {
    this.cs.postuser(form).subscribe((res) => {
      this.employeelist.push(form)
 
    })
  
    this.cs.form.reset()
  }

  formUpdate(form) {
    this.cs.form.reset()
    this.cs.updateuser(form).subscribe((data) => {
  
    //  return data
     
    })
    window.location.reload()
    debugger;
    this.crudcomponent.getEmployees()

  }

}
