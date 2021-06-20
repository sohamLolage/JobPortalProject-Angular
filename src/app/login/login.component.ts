import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { user } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUser={
  userName:'',
  password:''
}
user?:user;
  constructor(private ser:UserService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginUser);
    
    
    if((this.loginUser.userName===''|| this.loginUser.userName===null)&&(this.loginUser.password===''||this.loginUser.password==null)){
      Swal.fire("Fill All field",'','error')
    }
    else{
      this.ser.getUserfromServer(this.loginUser.userName).subscribe(
        (data)=>{
          this.user=data;
          //console.log(this.user);
          
          if(this.loginUser.password===this.user?.password){
            Swal.fire('success','','success');
            this.ser.setUser(this.user);
            if(this.user.role=="company"){
              //redirect to company dash bord
              
              
            }
            else if(this.user.role=="admin"){
              //redirect to admin
                this.route.navigate(['admin']);
            }
            else{
              //redirect to candiadte
             // console.log("i am in dashbord");
            }
          }
          else{
            Swal.fire('Enter correct credentials','','error');
          }
        },
        (error)=>{
          Swal.fire('Enter correct credentials','','error');
        }
      )
    }
  }

}
