import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  user1=this.ser.getUserFromStrorage();

  user={
    id:this.user1.id,
    userName:this.user1.userName,
    email:this.user1.email,
    password:this.user1.password,
    fullName:this.user1.fullName,
    contact:this.user1.contact,
    role:this.user1.role
  }
  constructor(private ser :UserService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ser.updateUserinServer(this.user).subscribe(
      (data)=>{
        Swal.fire('Updated','Login again......!','success');
        this.ser.logoutUser();
        this.route.navigate(['login']);

      },
      (error)=>{
          Swal.fire("Not Uodate",'server not responding',"error")
      }
    )

    
    

  }

}
