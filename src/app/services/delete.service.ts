import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

id:String;

delete(id:String){
  this.id=id;
  return this
            .http
            .delete('http://localhost:4000/'+this.id+'/delete');
}

}