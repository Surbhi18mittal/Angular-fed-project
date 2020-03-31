import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  name;
  price;
  category;
  detail;
  user;
  color;
  pname;
  productid;
  productName;
  productPrice;
  id;

  constructor(private http: AppService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  addit() {
    let json = {
      "category": this.category,
      "color": this.color,
      "detail": this.detail,
      "productName": this.productName,
      "productPrice": this.productPrice,
      "active": 1,
      "image": "red.jpg"
    };
    this.http.addit(json).subscribe(
      response => {
        console.log(response);
        alert("Product successfully added");
      }
    );
  }

  edit() {
    this.http.editprod(this.productid, {
      id: this.id,
      productName: this.productName,
      category: this.category,
      image: "red.jpg",
      price: this.price,
    }).subscribe((data) => {
      localStorage.removeItem('edit');
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.router.navigate(['/productdetails', this.id]);
      });
    });
  }
}
