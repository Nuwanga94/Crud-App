import { Injectable } from '@angular/core';

import{NgForm} from '@angular/forms';
import{HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class SendService {


  constructor(private http:HttpClient) { }





  sendData(formData:NgForm){
    return this   // wede unama methanin res denawa ts ekata alla ganna
              .http
              .post('http://localhost:4000/enroll',
              {
                "FirstName":formData.value.fName,
                "MidName":formData.value.mName,
                "LastName":formData.value.lName,
                "EmailId":formData.value.email
              });
  }

//JASON.stringify(formData.value) jason yawanna




}
