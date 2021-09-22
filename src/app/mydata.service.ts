import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {



  //  showingdataApp = new EventEmitter<Boolean>();
      showingdataApp = new Subject<boolean>()

  constructor(private http:HttpClient) { }

  todolist: any = [];
  url:any = "https://jsonplaceholder.typicode.com/posts"
  mydata:any = []


  getdata() {
    return this.http.get(this.url);
  }

  removedata(id) {
      return this.http.delete(`${this.url}/${id}`);
  }

  show:boolean = false;


  showingData() {
  //  this.showingdataApp.emit(true)
   this.showingdataApp.next(this.show = !this.show)

  }

  islogin: boolean = false;
  isLoggin() {
    this.islogin = true;

  }
  
  isLogout() {
    this.islogin = false;

  }

  isAuthonticate() {
    return this.islogin
  }


  family:any = [{
    name:'Sada',
    role:'UI Developer',
    age: 32,
    married: true,
    gender: 'male'
  },
  {
    name:'Sarika',
    role:'House Wife',
    age: 30,
    married: true,
    gender: 'female'
  },
  {
    name:'Shanvika Bachuwar',
    role:'Playing Games',
    age: 2,
    married: false,
    gender: 'female'
  },
  {
    name:'prakash',
    role:'retired',
    age: 71,
    married: true,
    gender: 'male'
  },
  {
    name:'chandrakala',
    role:'house wife',
    age:60,
    married: true,
    gender: 'female'
  },
  {
    name:'mahendar',
    role:'project manager',
    age: 36,
    married: true,
    gender: 'male'
  },
  {
    name:'jayasri',
    role:'house wife',
    age: 30,
    married: true,
    gender: 'female'
  },
  {
    name:'akhila',
    role:'studying',
    age: 20,
    married: false,
    gender: 'female'
  },

  {
    name:'anusha',
    role:'studying',
    age: 19,
    married: false,
    gender: 'female'
  },
  {
    name:'akku',
    role:'studying',
    age: 11,
    married: false,
    gender: 'female'
  },  
  {
    name:'chikku',
    role:'studying',
    age: 12,
    married: false,
    gender: 'female'
  },
  {
    name:'chitavake',
    role:'studying',
    age: 6,
    married: false,
    gender: 'female'
  },
  {
    name:'gaurik',
    role:'studying',
    age: 4,
    married: false,
    gender: 'female'
  }


]


}
