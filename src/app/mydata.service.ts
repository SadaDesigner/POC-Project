import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

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

  


}
