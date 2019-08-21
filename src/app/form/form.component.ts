import { Component, OnInit } from '@angular/core';



import { SendService } from '../services/send.service'
import {NgForm} from '@angular/forms';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})


export class FormComponent implements OnInit {


  //pitin gena services/classes private daala ganna ona
  constructor(private senddata:SendService) { }

  ngOnInit() {
  }


  onSubmit(formData : NgForm){
    console.log(formData.value);

    this.senddata.sendData(formData).subscribe(res=>{ //subscribe-ewana response eka alla gannawa
      console.log(res)
    },
    err=>{
      alert("wrong")
    });
  }


}
