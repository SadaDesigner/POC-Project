import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  constructor(private http:HttpClient) { }
  @ViewChild('myform') signUpForm: NgForm;

  restrictednames:any  = ['sadashiv', 'sarika']



  members:any = 
    [
      {
        email: "bsadashiv123@gmail.com",
        gender: "male",
        username: "sadashiv"
        },

        {
          email: 'bachuwarsarika@gmail.com',
          gender: 'female',
          username:'sarika'
         },

         {
          email: 'bachuwarshanvika@gmail.com',
          gender: 'female',
          username:'shanvika'
         },
      ]



  id:number = 0;
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
      'hobbies' : new FormArray([])
     
    })
    
  } 

  reactFormSubmit() {
    // console.log(this.reactsignup)

    const postData = this.reactsignup.value

    this.http.post('https://mysecondproject-a78bd-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', postData).subscribe((response) => {
      console.log(response)
    },

    (error) =>{
      console.log('error is coming' + error)
    }
    
    )


  }

  isRestricted(control: FormControl): {[s: string]: boolean} {

    if(this.restrictednames.includes(control.value)) {
      return { nameIsRestricted: true }
    }

    return null;
   


  
  }
 
  
  control:any;
  onAddHobby() {
     const control = new FormControl(null, Validators.required);

     (<FormArray>this.reactsignup.get('hobbies')).push(control)
     
  }
  get getHobbies () {
    return  (<FormArray>this.reactsignup.get('hobbies')).controls
  }



}
