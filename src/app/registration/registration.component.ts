import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { user } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user={
    userName:'',
    email:'',
    password:'',
    fullName:'',
    contact:'',
    role:''
  }
  list:user[]=[];
  radio=['company','candidate'];
  constructor(private ser:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.user);
  
     
    
    if((this.user.role==""||this.user.role==null)&&(this.user.userName==""||this.user.userName==null)&&
    (this.user.email==""||this.user.email==null)&&(this.user.password==""||this.user.password==null)&&
    (this.user.contact==""||this.user.contact==null)&&(this.user.fullName==""||this.user.fullName==null)){
        Swal.fire('All feild Required','','error')
    }
    else{
      this.ser.createSecureUser(this.user).subscribe((data)=>{
          Swal.fire('Register','user registed successfully','success');
          this.route.navigateByUrl("login");
      },
      (error)=>{
          Swal.fire('UserName Already Exits','','error');
      });
    }

    

  }

}
