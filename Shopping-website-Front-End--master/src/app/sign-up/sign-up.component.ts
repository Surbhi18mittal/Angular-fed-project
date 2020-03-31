import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
import { posts } from '../posts';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

post1=new posts(1,"","", "bdn");
  constructor(private service:GetUserService) { }

  ngOnInit() {
  }
  onsubmit()
  {
    this.service.post1_user(this.post1).subscribe(
      data=>console.log("SUCCESS",data),
      error=>console.log("ERROR",error)

    )
    alert("Successfully created account:Press Login")
  }

}
