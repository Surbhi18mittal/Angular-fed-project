import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {posts} from './posts';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http:HttpClient) { }
  post1_user(posts:posts)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post<any>('http://localhost:8090/api/addUsers',posts,{headers: new HttpHeaders({'Content-Type':'application/json'})});
  }

}
