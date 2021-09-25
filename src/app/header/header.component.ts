import { Component, OnInit, Input } from '@angular/core';
import { ObjectUnsubscribedError, Observable, observable, of, Subject } from 'rxjs';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input ('aname') myappname:any;

  constructor(private dataservice: MydataService) { }

  username: string = "";

  getusername() {
  this.username = prompt('enter username')
  }

  isloginshow: boolean = false;
  Login() {
    this.dataservice.isLoggin();
    //this.isloginshow = this.dataservice.islogin
  }

  Logout() {
    this.dataservice.isLoggin()
  
  }


  isloginsubscription:any; 
  isloginsubsribe() {
    this.isloginsubscription = this.dataservice.isloginevent.subscribe((data) => {
      this.isloginshow = data;
  
  })
  
  }


  multipleSubscriber() {
    const arr = [20,30,40,50,60];

    return (observer) => {
        this.run(observer, arr, 0)

        return {
          unsubscribe() {}
        }
    }
  }

  run(observer, arr, index) {
    return setTimeout(() => {
      observer.next(arr[index])

      if(index === arr.length - 1) {
          observer.complete()
      }

      else {
        this.run(observer, arr, ++ index)
      }
    }, 2000)
  }

  ngOnInit(): void {
    this.isloginsubsribe()


    // const numbers = [1,2,3,4,5,6]
    // const obj = {
    //   name: 'sadshiv',
    //   gender: 'male'
    // }

    // const nameArray = ['nag', 'chiru', 'venky', 'balayya'] 

    // const obs = of(30, numbers, obj, 'string', nameArray, {})

    // obs.subscribe(data => {console.log('obs data ' + data)})

    // setTimeout(() => {obs.subscribe(data => {console.log(data)})}, 4000)


    const sequence = new Observable(this.multipleSubscriber())

    sequence.subscribe({
      next(num) {
          console.log('1st subscriber' + num)
      },

      complete() {
        console.log('1st finished')
      }
    })


 setTimeout(() => {
   sequence.subscribe({
     next(num) {
       console.log('2nd subscriber' + num)
     },

     complete() {
       console.log('2nd finished')
     }
   })
 }, 3000)

    }
 

}
