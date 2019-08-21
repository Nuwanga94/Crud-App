import { Component, OnInit } from '@angular/core';
import {GetService} from '../services/get.service' ;
import {Customer} from '../models/customer'
import {ActivatedRoute} from '@angular/router'
import { NgForm } from '@angular/forms';
import {UpdateService} from '../services/update.service'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private getData:GetService,private activeRoute:ActivatedRoute,private updateData:UpdateService) { }
customer:Customer;

  ngOnInit() {
     this.getData.getOneData(this.activeRoute.snapshot.paramMap.get('id'))
     .subscribe((data:Customer)=>{
       this.customer=data;
     })
  }


  update(formdata:NgForm){
    this.updateData.updateData(formdata,this.activeRoute.snapshot.paramMap.get('id'))
    .subscribe(res=>{
      console.log(res)
      alert("Updated!")
      this.ngOnInit();
    })
  }

}
