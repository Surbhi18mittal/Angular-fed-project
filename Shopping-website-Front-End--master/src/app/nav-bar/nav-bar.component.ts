import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router,private service:HttpService) {}

  ngOnInit() {
  }
func(id)
{
  this.router.navigate(['/cartid',id]);
}
logout()
{
  sessionStorage.removeItem('token');
  this.service.isloggedin(false);
  this.router.navigate(['login'])


}
showcart()
{
  this.router.navigate(['/cart']);
}
}
