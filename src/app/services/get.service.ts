import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }

id:string;



  getData(){
    return this
              .http
              .get('http://dev.aspitio.com:82/api/note/user/'+this.id);
  }

  // getOneData(id:string){
  //   this.id=id; //id variable eka global karanawa
  //   return this
  //             .http
  //             .get('http://localhost:4000/'+this.id);
  // }
}