import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MydataService } from '../mydata.service';


@Component({
  selector: 'app-cpipe',
  templateUrl: './cpipe.component.html',
  styleUrls: ['./cpipe.component.scss']
})
export class CpipeComponent implements OnInit {

  constructor(public dataservice: MydataService,) { }
  
  @Output() mycustomevent = new EventEmitter()

  // sendoutput() {
  //   this.mycustomevent.emit(this.childdata)
  // }
  childdata: string = 'this data coming from child to parent component using output event emitter'
  family:any = this.dataservice.family;
  selection:any;
  ngOnInit(): void {
    this.mycustomevent.emit(this.childdata)
    // this.sendoutput()
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
