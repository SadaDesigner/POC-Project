import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http:HttpClient) { }
  url:any = "https://jsonplaceholder.typicode.com/todos"
  mydata:any = []
  getdata() {
    return this.http.get(this.url);
  }


}
