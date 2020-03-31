import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, ActivatedRoute, Router, Data} from '@angular/router';
import { DataService } from '../data.service';
import {AppService} from "../app.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
public id;
result:any;
  constructor(private router:Router,private service4:DataService,private route:ActivatedRoute,private service:DataService,private service1:AppService) {
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id');
this.service.getbyId(this.id).subscribe(response=>{this.result=response;console.log(this.result);
//this.router.navigate(['/productdetails',id]);
});
   });
   }


  ngOnInit() {
    //let id=parseInt(this.route.Snapshot.parseMap.get('id'));
   // this.route.paramMap.subscribe(params=>{ let id=parseInt(params.get('id'));
   // this.ID=id;
  //});


  }
  addproduct(id) {

    this.service1.addProductToCart(id).subscribe((data) => {
      console.log(data);
      alert("Product successfully added to the cart!");
      //this.products = data;
    });


  }
  editProduct(productid) {
    this.service4.edit(true);
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.router.navigate(['/add'], {
        relativeTo: this.route,
        queryParams: {
          id: productid
        }
      });
    });
  }
}


