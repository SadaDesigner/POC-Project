import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpipe',
  templateUrl: './cpipe.component.html',
  styleUrls: ['./cpipe.component.scss']
})
export class CpipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //para: number = 4;
  helo:any;

  list:any = [{
    name:'Sada',
    role:'UI Developer',
    joinDate: new Date()
  },
  {
    name:'Sarika',
    role:'House Wife',
    joinDate: new Date()
  },
  {
    name:'Shanvika Bachuwar',
    role:'Playing Games',
    joinDate: new Date()
  }]

  addList() {
    this.list.push({name:'Chitavake', role:'school', joinDate:new Date()})
  }

  //async pipe practise with promise
  mypromise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('data has been recieved successfully by using async pile')
    }, 3000)
  }) 

  



}
