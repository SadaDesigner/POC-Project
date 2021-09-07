import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input ('aname') myappname:any;

  constructor() { }

  username: string = "";


  getusername() {

  
  this.username = prompt('enter username')

  }

  ngOnInit(): void {
  }

}
