import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

 
  constructor(private http: HttpClient) { }

  isdatacoming: boolean = true;
  searchString: string = "";
  listResults: any = []


  getdata() {
    const urlofApi = 'https://api.github.com/search/repositories?q=' + this.searchString;
    this.http.get(urlofApi).subscribe(res => {
      this.listResults = res;

      console.log(this.listResults)

    })

  }

  ngOnInit(): void {
    
  }


}
