import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chirp',
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.scss']
})
export class ChirpComponent implements OnInit {

  searchAirport:string;
  airportList: any = [];
 
  constructor(private http:HttpClient) { }


  getairportdata() {
    this.http.get('https://testlocalapi.chirp.co/jetsavvyapi/Jet/searchcityairport/' + this.searchAirport)
    .subscribe(airportres => {
      this.airportList = airportres
     console.log(this.airportList)

    })
  }



  simplePostForm: FormGroup;

  ngOnInit(): void { 
    this.simplePostForm = new FormGroup({
      'one': new FormControl(null, Validators.required),
      'two': new FormControl(null, Validators.required)
    })
   
  }

  postSimpleForm() {
    console.log(this.simplePostForm)
  }

}
