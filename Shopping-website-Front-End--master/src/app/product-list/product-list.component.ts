import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import {AppService} from "../app.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  result: any;
  public ID;
  prodid;
  products;

  constructor(private r: ActivatedRoute, private service: DataService, private router: Router, private service1: AppService) {

    this.service.products().subscribe(res => {
      this.result = res;
      console.log(this.result);
    });
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

  func(id) {
    this.router.navigate(['/productdetails', id]);
  }

  func1(id) {
    this.router.navigate(['/cart', id]);
  }

  viewdetails(id) {
    this.router.navigate(['/productdetails', id]);
  }

  showpricefilters($event, number1: number, number2: number) {

    this.service.getBypricefilter(number1, number2).subscribe((data) => {
      this.result = data;
    });
  }

  addproduct(id) {

    this.service1.addProductToCart(id).subscribe((data) => {
      console.log(data);
      alert("Product successfully added to the cart!");
      //this.products = data;
    });


  }
}
