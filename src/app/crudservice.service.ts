import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup,  FormControl, Validators} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http:HttpClient) { }


  departments: any = [
    {
      id:1, name:'angular'
    },
    {
      id:2, name:'react'
    },
    {
      id:3, name:'html'
    },
    {
      id:4, name:'css'
    },

  ]




  form = new FormGroup( {
    key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPerminant: new FormControl(false)
  })

  initialformgroup() {
    this.form.setValue(
      {
        key: null,
        fullname: '',
        email: '',
        mobile: '',
        city:'',
        gender: 1,
        department: '',
        hireDate:'',
        isPerminant: ''
      }
    )
  }

url = 'http://localhost:3000/employees'

getCobjId: number;
editMode: boolean = false;
  prepopulatevalues(cuserid, cuser) {
    this.form.setValue(cuser)
    this.getCobjId = cuserid
  
  }



getuser() {
  return this.http.get(this.url)
}
postuser(user) {

  return this.http.post(this.url, user)
}


updateuser(cuser) {
  return this.http.put(this.url + '/' +  this.getCobjId, cuser)
}
deleteuser(userid) {
  return this.http.delete(this.url + '/' + userid)
}

}
