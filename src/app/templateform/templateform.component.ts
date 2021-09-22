import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users } from '../model';
import { environment } from '../../environments/environment'


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollTable') scrollTable: ElementRef

  @ViewChild('myform') signUpForm: NgForm;
  constructor(private http: HttpClient) { }




  restrictednames: any = ['sadashiv', 'sarika']
  showTemplateDrive: boolean = false;
  members: any =
              [
              {
              email: "bsadashiv123@gmail.com",
              gender: "male",
              username: "sadashiv"
              },

              {
              email: 'bachuwarsarika@gmail.com',
              gender: 'female',
              username: 'sarika'
              },

              {
              email: 'bachuwarshanvika@gmail.com',
              gender: 'female',
              username: 'shanvika'
              },
              ]
  id: number = 0;
  prefill(id) {
    this.signUpForm.form.setValue(this.members[id])   //setvalue practise
  }
  updateinput() {
    console.log(this.signUpForm)
  }

  myformuser: any;
  formSubmitted: boolean = false;   //doubt where to keep
  formSubmit() {
    this.myformuser = this.signUpForm.form.value;
    this.formSubmitted = true;
    console.log(this.signUpForm)

  }
  resetForm() {
    this.signUpForm.reset()
  }

  reactsignup: FormGroup

  ngOnInit(): void {
   

    this.reactsignup = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.isRestricted.bind(this)]),
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl(null, Validators.required)

      }),
      'hobbies': new FormArray([])

    })
    debugger;
    this.getReactFormData()

  }
  url = environment.url;
  reactFormSubmit() {
    // console.log(this.reactsignup)

    const postData = this.reactsignup.value
    this.http.post<Users[]>(this.url, postData).subscribe((response) => {
      console.log('resut' + response)
    },

      (error) => {
        console.log('error is coming' + error)
      }
    )

    this.getReactFormData()


  }

  users: Users[];
  getReactFormData() {
    let paramvalue = new HttpParams()
    paramvalue = paramvalue.append('name', 'sada');
    paramvalue = paramvalue.append('lastname', 'bachuwar');
    this.http.get(this.url, 
      {
        headers: new HttpHeaders({
          'custom-header': 'sadashiv'
        }),


        // params: new HttpParams().set('name', 'sada').set('lastname', 'bachuwar')
        params: paramvalue


      })
      .pipe(map((res: {[key: string]: Users}) => {
        let users: Users[] = []
        for (let key in res) {
          users.push({ ...res[key], key })
        }

        return users; 

      }))
      .subscribe((res: Users[]) => {
        console.log('get data' + res)
        this.users = res;
      })
  }

  deleteReactForm() {
   return this.http.delete(this.url,
      {
        observe: 'response',
      }
      ).subscribe(response => console.log('deleted' + response))
  }

  isRestricted(control: FormControl): { [s: string]: boolean } {

    if (this.restrictednames.includes(control.value)) {
      return { nameIsRestricted: true }
    }

    return null;




  }


  control: any;
  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.reactsignup.get('hobbies')).push(control)

  }
  get getHobbies() {
    return (<FormArray>this.reactsignup.get('hobbies')).controls
  }


  elementHeight:any;
  ngAfterViewInit() {

    this.elementHeight = this.scrollTable.nativeElement.getBoundingClientRect().height

  }

}
