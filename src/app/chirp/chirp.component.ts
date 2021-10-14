import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-chirp',
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.scss']
})
export class ChirpComponent implements OnInit{

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


  
  public result:any;
  names:any;
  country_url:any =  'https://jsonplaceholder.typicode.com/users'
  myvalue:string;

// getcountrylist(cvalue) {
//  // this.myvalue = cvalue;
//    this.http.get(this.country_url).toPromise().then(data => {
//     this.result.push(data)
//   })
// }

listheading = ''
  get checkHeading() {
    return this.listheading != ""
  }
 getnames:any= new Observable()
  ngOnInit(): void { 

    let mypromise = new Promise(resolve => {
      console.log('promise is running by default')
      resolve('promise running after then')
      resolve('second resolve wont work')// wont' work, promise supports only one valuve
      resolve('second resolve wont work')// wont work
    })
    mypromise.then(data => {
      console.log('promise result' + data)
    })

    
    this.ac.queryParams.subscribe((response) => {
      this.mynamefromsettings = response

    })

     //this.myvalue = cvalue;

    //getdata http data using  promise
      // this.http.get(this.country_url).toPromise().then(data => {
      //   this.result = data;

      // })

        //getdata http data using  promise
        this.getnames = this.http.get(this.country_url)
        // .pipe(map(data=>{
        //     return data.map(da=> 
        //       ({name:da.name}))
        // }))
        .subscribe(data=> {
          this.result = data;
            console.log(JSON.stringify(data))
        })

    
  }



}
