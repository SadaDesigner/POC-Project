import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-chirp',
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.scss']
})
export class ChirpComponent implements OnInit {

  searchAirport:string;
  airportList: any = [];
 
  constructor(private http:HttpClient, private ac:ActivatedRoute, private dataservice:MydataService) { }


  // family:any = this.dataservice.family

  getairportdata() {
    this.http.get('https://testlocalapi.chirp.co/jetsavvyapi/Jet/searchcityairport/' + this.searchAirport)
    .subscribe(airportres => {
      this.airportList = airportres,
     console.log(this.airportList)

    })
  }

  mynamefromsettings:any; 

  ngOnInit(): void { 

    this.ac.queryParams.subscribe((response) => {
      this.mynamefromsettings = response

    })
  }

}
