import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { user } from '../Model/user';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  local:any;

  constructor(private http:HttpClient) { }

  public createSecureUser(user:any):Observable<any>{
    //console.log("i am in service");
    
   return this.http.post(`${baseUrl}/register/`,user);
  }
  public updateUserinServer(user:any):Observable<any>{
      return this.http.put(`${baseUrl}/register/`,user);
  }

  public getUserfromServer(userName:string):Observable<any>{
    //console.log("i am in service");
      return this.http.get(`${baseUrl}/login/${userName}`);
  }

  public getAllUser():Observable<user[]>{
    return this.http.get<user[]>(`${baseUrl}/register/`);
  }

  public isUserLogin():boolean{
     let localUser=sessionStorage.getItem('user');
     //console.log(localUser);
     
     if(localUser!=null || localUser!=undefined){
       return true;
     }
     else{
       return false;
     }
  }

  public setUser(user:user){
    let userstr=JSON.stringify(user);
    sessionStorage.setItem('user',userstr);
  }
  public logoutUser(){
    sessionStorage.removeItem('user');
    sessionStorage.clear();
  }

  public getRole():string{
    this.local=sessionStorage.getItem('user');
    let userobj=JSON.parse(this.local);
    return userobj.role;
  }
  public getUserFromStrorage():user{
    this.local=sessionStorage.getItem('user');
    let userobj=JSON.parse(this.local);
    return userobj;
  }

}
