import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  usersUrl="http://127.0.0.1:8000/users"
  userDetailsUrl="http://127.0.0.1:8000/userdetail"


  getData(){
    return this.http.get<any>(this.usersUrl);
  }
  postData(data:any){
    return this.http.post<any>(this.usersUrl,data);
  }
  updateData(data:any){
    return this.http.put<any>(this.usersUrl,data);
  }
  deleteUser(Id:number){
    return this.http.delete<any>(`${this.usersUrl}/${Id}`);
  }


  getDetails(){
    return this.http.get<any>(this.userDetailsUrl);
  }
  postDetails(data:any){
    return this.http.post<any>(this.userDetailsUrl,data);
  }
  updateDetails(data:any){
    return this.http.put<any>(this.userDetailsUrl,data);
  }
  deleteDetails(Id:number){
    return this.http.delete<any>(`${this.userDetailsUrl}/${Id}`);
  }







}
