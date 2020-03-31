import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppService} from "../app.service";
import {AuthenticationServiceService} from "../authentication-service.service";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 myprod;

  constructor(private router:Router,private route:ActivatedRoute,private service2:AppService,private http:HttpClient,private service:HttpService,private authservice:AuthenticationServiceService) { }
  disabled=true;
  url='http://localhost:8090/profile/update';
  ngOnInit() {
    this.service2.getinfo().subscribe(data=>{
      this.myprod=data;
    });
  }
  orders()
  {
    this.router.navigate(['/orderdetails']);
  }
  edit()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: 'Basic '+token});
    return this.http.put(this.url,this.myprod,{headers}).subscribe(data=>{
      console.log(data);
      //this.router.navigate(['/profile']);
    });
  }

}
