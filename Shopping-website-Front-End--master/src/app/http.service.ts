import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

 //getAllItems()
  //{
    //const token =sessionStorage.getItem("token");
    //const headers=new HttpHeaders({Authorization:'Basic'+token});
    //return this.http.get("http://localhost:8090/api/notes",{headers});

  //}
  //getItemById(id)
  //{
    //const token=sessionStorage.getItem("token");
    //const headers=new HttpHeaders({Authorization:'Basic'+token});
    //return this.http.get("http://localhost:8090/api/notes"+id,{headers});
    
  //}
  isloggedin(bool:boolean)
  {
    sessionStorage.setItem('auth',String(bool));
    return bool;
  }
  checklogin()
  {
    const auth=sessionStorage.getItem('auth');
    //if(auth)
    //{
      //return true;
    //}
    //else{
      //return false;
    //}
    return JSON.parse(auth);
  }
}
