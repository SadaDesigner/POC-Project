import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from 'src/app/crudservice.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import { CrudComponent } from '../crud.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public cs:CrudserviceService, public route:Router, public ts:ToasterService) { }


  @Input('employeelist') employeelist:any;
  @Input('employee') employee:any;
 


  onClick() {
    this.cs.form.reset()
  }

 
  formSubmit(form) {
   
    this.cs.postuser(form).subscribe((res) => {
      this.employeelist.push(form)
 
    })
    this.route.navigate(['/mycrud'])
    this.cs.form.reset()
    this.ts.getToster('success', 'employee added successfully!')
  }

  formUpdate(form) {
    this.cs.form.reset()
    this.cs.updateuser(form).subscribe((data) => {
  
    //  return data
     
    })
    this.ts.getToster('warning', 'employee updated successfully!')
    this.route.navigate(['/mycrud'])
   // window.location.reload()
   
    //this.crudcomponent.getEmployees()

  }

  ngOnInit(): void {
  
  }


}
