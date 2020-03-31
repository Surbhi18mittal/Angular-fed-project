import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { DataService } from '../data.service';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:HttpService,private router:Router,private route:ActivatedRoute,private authservice:AuthenticationServiceService) { }
username;
password;
  ngOnInit() {
    if(this.service.checklogin())
    {
      this.router.navigate(['products']);
    }

  }
login()
{
  console.log(this.username);
  console.log(this.password);
  this.authservice.authenticate(this.username,this.password).subscribe(data=>{this.service.isloggedin(true);this.router.navigate(['products']);});


}
logout()
{
  this.service.isloggedin(false);
}
}
