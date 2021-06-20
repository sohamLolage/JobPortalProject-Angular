import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public getJobCategory(){
    return this.http.get(`${baseUrl}/admin/jobcategiry`);
  }
  public addJobcategory(jobcategiry:any):Observable<any>{
    console.log("i am admin service"+jobcategiry.jobCategiry);
    
   return this.http.post(`${baseUrl}/admin/`,jobcategiry);
  }
  public deleteJobCategory(id:any){
    return this.http.delete(`${baseUrl}/admin/categiry/${id}`)
  }
  public getAllJob(){
   return this.http.get(`${baseUrl}/admin/jobs`);
  }
  public getAllCandidate(){
   return this.http.get(`${baseUrl}/admin/candidate`);
  }
  public getAllCompany(){
    return this.http.get(`${baseUrl}/admin/company`);
  }
  public deleteUser(id:any){
    return this.http.delete(`${baseUrl}/admin/user/${id}`)
  }



}
