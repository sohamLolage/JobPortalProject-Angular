
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  public user=this.ser.getUserFromStrorage();
  flag:boolean=true;
  //public user?:any;
  constructor(public ser:UserService , private route:Router) {

    //console.log(this.user.userName);
    //this.user=sessionStorage.getItem('user');
    // if(this.user==null || this.user==undefined){
    //     this.flag=false;
    // }
    
    

    
    
   }
  ngOnChanges(changes: SimpleChanges): void {
   
   this.user=this.ser.getUserFromStrorage();
  }
 
  
  
  ngOnInit(): void {
  }

  onLogout(){
    this.ser.logoutUser()
    this.route.navigate(['login']);

  }
  onDashBord(){
    //console.log("i am dash Boad Method");
    //console.log(this.user);
    
    if(this.user.role=="admin"){
      this.route.navigate(['admin']);
    }
  }

}
