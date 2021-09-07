import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MydataService } from 'src/app/mydata.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private dataservice: MydataService, private acroute: ActivatedRoute) { }

  detailtodo: any = [];
  todo: any;

  id: number;
  myquery:any;
  
  ngOnInit(): void {

    this.id = this.acroute.snapshot.params['id']
    this.detailtodo = this.dataservice.todolist[this.id - 1]
    console.log(this.detailtodo)
   
   //getting query parameters
    this.acroute.queryParams.subscribe((data) => {
      this.myquery = data
      console.log(this.myquery)
    })


    // this.acroute.params.subscribe( (data) => {
    // this.id = data['id']
    // } ) 
   // this.dataservice.getdata().subscribe(data => this.detailtodo = data)

    //console.log(this.id)


   
  }

}
