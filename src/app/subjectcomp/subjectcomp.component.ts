import { Component, OnInit } from '@angular/core';
import { interval, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectcomp',
  templateUrl: './subjectcomp.component.html',
  styleUrls: ['./subjectcomp.component.scss']
})
export class SubjectcompComponent implements OnInit {

  constructor() { }

  
  multipleSubscriber() {
    const arr = [20,30,40,50,60, 70, 80, 90];

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

  withoutsubject1:any;
  withoutsubject2:any;
  withoutsubject3:any;
  withoutsubject4:any;
  
  withsubject:any;

  subject = new Subject()
  
  //subject = new BehaviorSubject(0)
  

obs = interval(1000)
sub1:any;
sub2:any;
sub3:any;
sub4:any;
callbefore () {
this.sub1 = this.obs.subscribe((data) => {
  console.log('1st sub ' + data)
  this.withoutsubject1 = data;
})
}

calllater () {
this.sub1.unsubscribe()
  this.sub2 = this.obs.subscribe((data) => {
    console.log('2nd sub ' + data)
    this.withoutsubject2 = data;
  })

  this.sub1.unsubscribe()

}

stopsubscribe() {
  this.sub1.unsubscribe()
  this.sub2.unsubscribe()
  
}
stopsubscribe2 () {
  this.sub3.unsubscribe()
  this.sub4.unsubscribe()
}

callbefore1 () {
  // this.sub1.unsubscribe()
  // this.sub2.unsubscribe()

  this.obs.subscribe((data) => {
    this.subject.next(data)
  })


  this.sub3 = this.subject.subscribe((data) => {
      this.withoutsubject3 = data
  })

}

calllater1 () {
  // this.sub1.unsubscribe()
  // this.sub2.unsubscribe()
     this.sub3.unsubscribe()

  // this.obs.subscribe((data) => {
  //   this.subject.next(data)
  // })

  this.sub4 = this.subject.subscribe((data) => {
      this.withoutsubject4 = data
  })

}

     

  ngOnInit(): void {

  

    // const numbers = [1,2,3,4,5,6]
    // const obj = {
    //   name: 'sadshiv',
    //   gender: 'male'
    // }

    // const nameArray = ['nag', 'chiru', 'venky', 'balayya'] 

    // const obs = of(30, numbers, obj, 'string', nameArray, {})

    // obs.subscribe(data => {console.log('obs data ' + data)})

    // setTimeout(() => {obs.subscribe(data => {console.log(data)})}, 4000)


//     const sequence = new Observable(this.multipleSubscriber())

//     sequence.subscribe({
//       next(num) {
//           console.log('1st subscriber' + num)
//       },

//       complete() {
//         console.log('1st finished')
//       }
//     })


//  setTimeout(() => {
//    sequence.subscribe({
//      next(num) {
//        console.log('2nd subscriber' + num)
//      },

//      complete() {
//        console.log('2nd finished')
//      }
//    })
//  }, 10000)
 




// obs.subscribe((data) => {     //subscribing data then send it to subect
//    this.subject.next(data)
// })

// let newsub1 = this.subject.subscribe((data) => {
//     console.log('1st ' + data)
// })

// let newsub2;
// setTimeout(() => {

//   newsub2  = this.subject.subscribe((data) => {
//     console.log('2nd ' + data)
// })
//   newsub1.unsubscribe()
// }, 5000)

// setTimeout(() => {
//   newsub2.unsubscribe()
// }, 10000)



 
let ofmydata = 'sadashiv';
let dummy =of(ofmydata)


   dummy.subscribe((data) => {

    console.log('testing observable ' + data)
  })


  }

}
