import { Component, OnInit } from '@angular/core';

import {GetService} from '../services/get.service';
import {Customer} from '../models/customer'
import {Router} from '@angular/router'
import {DeleteService} from '../services/delete.service'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {




  constructor(private getData: GetService, private route:Router,private deleteData:DeleteService) { }

  allCustomer: Customer[];

  ngOnInit() {

    this.getData.getData().subscribe((data:Customer[])=>{
      this.allCustomer=data;
      console.log(this.allCustomer);
      
    })

  }

  edit(id:String){
    this.route.navigate([id,'edit']);
  }

  delete(id:String){
    console.log(id);
    this.deleteData.delete(id).subscribe(res=>{
    
      console.log(res)
      this.ngOnInit(); 
    })
  }
}
