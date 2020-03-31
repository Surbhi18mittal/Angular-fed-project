import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  prodid;
  products;
  total=0;
  cart;
i;
  constructor(private router: Router, private service: AppService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    return this.service.showCart().subscribe((data) => {
      this.cart = data;
      this.findtotal();
    });

  }

  deleteproduct(id) {
    this.service.DeleteProduct(id).subscribe((data) => {
      this.service.showCart().subscribe((data1) => {
        this.cart = data1;
      });
    });
  }

  decreaseproduct(rid: number) {
    this.service.removeproductFromCart(rid).subscribe((data) => {
      this.service.showCart().subscribe((data2) => {
        this.cart = data2;this.findtotal1();
      });
    });
  }

  increaseproduct(aid: number) {
    this.service.addProductToCart(aid).subscribe((data) => {
      this.service.showCart().subscribe((data3) => {
        this.cart = data3;this.findtotal();
      });
    });
  }

 checkout() {
    this.service.checkout().subscribe((data4) => {
      this.router.navigate(["/orderhistory"]);
  });
   //this.router.navigate(["/orderhistory"]);
 }
  findtotal()
  {
    this.total=0;
    for(this.i=0;this.i<this.cart.length;this.i++)
    {
      this.total+=this.cart[this.i].items.productPrice*this.cart[this.i].quantity;
    }
  }
  findtotal1()
  {
    this.total=0;
    for(this.i=0;this.i<this.cart.length;this.i++)
    {
      this.total=this.cart[this.i].items.productPrice*this.cart[this.i].quantity-this.total;
    }
  }
}
