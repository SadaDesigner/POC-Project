import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

 
  constructor(private http: HttpClient, private ac:ActivatedRoute) { }

  isdatacoming: boolean = true;
  searchString: string = "";
  listResults: any = []
  hello:Subscription

  getdata() {
    const urlofApi = 'https://api.github.com/search/repositories?q=' + this.searchString;
    this.http.get(urlofApi).subscribe(res => {
      this.listResults = res;

      console.log(this.listResults)

    })

  }

  
  sendmyname = {
    name:'bachuwar'
  }

  ngOnInit(): void {
    this.ac.data.subscribe((data) => {
      console.log('routing data ' + data.role)
    })
    
  }

  ngOnDestroy() {
    alert('thanks for visiting settings')
    console.log('settins component destroyed')

    
  }


}
