import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ProfileComponent } from './profile/profile.component';


import { ProductListComponent } from './product-list/product-list.component';
import {OrderhistoryComponent} from "./orderhistory/orderhistory.component";
import {AddproductComponent} from "./addproduct/addproduct.component";


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login', component:LoginComponent},

  {path:'productdetails/:id',component:ProductDetailsComponent},
  {
    path:'cart',component:UserCartComponent
  },
  {
    path:'orderhistory',component:OrderhistoryComponent
  },
  {path:'home',component:HomePageComponent},
  {
    path:'products',component:ProductListComponent
  },



  {path:'signup',component:SignUpComponent},
  {path:'add',component:AddproductComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
