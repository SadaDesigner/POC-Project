import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {



  //  showingdataApp = new EventEmitter<Boolean>();
      showingdataApp = new Subject<boolean>()

  constructor(private http:HttpClient) { }

  todolist: any = [];
  url:any = "https://jsonplaceholder.typicode.com/posts"
  mydata:any = []


  getdata() {
    return this.http.get(this.url);
  }

  removedata(id) {
      return this.http.delete(`${this.url}/${id}`);
  }

  show:boolean = false;


  showingData() {
  //  this.showingdataApp.emit(true)
   this.showingdataApp.next(this.show = !this.show)

  }

  


}
