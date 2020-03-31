import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
cart:any;
  constructor(private service:AppService) { }

  ngOnInit() {
    return this.service.getorderhistory().subscribe((data)=>{
      this.cart=data;
    });
  }



}
