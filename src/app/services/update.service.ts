import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  idno:string;
  
  updateData(formdata:NgForm, id:string){
    
      this.idno=id;
  
      return this
                  .http
                  .put('http://localhost:4000/'+this.idno+'/edit',
                    {
                "fName":formdata.value.fName,
                "mName":formdata.value.mName,
                "lName":formdata.value.lName,
                "email":formdata.value.email
                    });
    }
  }