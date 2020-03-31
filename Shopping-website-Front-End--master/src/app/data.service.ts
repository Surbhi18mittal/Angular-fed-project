import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
products()
{
  return this.http.get("http://localhost:8090/api/notes");
}
getproductByCategory(category:String)
{
  return this.http.get("http://localhost:8090/api/products/category/"+category);
}
edit(bool:boolean)
{
  localStorage.setItem('edit',String(bool));
  return bool;
}

getbyId(id:Number)
{
  return this.http.get("http://localhost:8090/api/notes/"+id);
}
getBypricefilter(price1,price2)
{
  return this.http.get("http://localhost:8090/api/getByPrice/"+price1+"/"+price2);
}
}
