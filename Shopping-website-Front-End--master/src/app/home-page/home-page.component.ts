import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {DataService} from "../data.service";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  result: any;

  constructor(private router: Router, private service: DataService) {
  }

  ngOnInit() {
  }

  showCategory(category) {
    if (category == 'All') {
      this.service.products().subscribe(response => {
        this.result = response;
      });
    } else {
      this.service.getproductByCategory(category).subscribe(response => {
        this.result = response;
        console.log(this.result);
      });

    }

  }
}

