import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  user?:user=this.ser.getUserFromStrorage();
  displayedColumns: string[] = ['name', 'value'];
  transactions: Transaction[] = [
    {name: 'id', value : this.user?.id},
    {name: 'User Name', value : this.user?.userName},
    {name: 'full name', value: this.user?.fullName},
    {name: 'Email', value: this.user?.email},
    {name: 'Contact', value: this.user?.contact},
    {name: 'Role', value: this.user?.role},
    {name: 'Status', value: this.user?.active},
  ];
  constructor(private ser:UserService) {
    this.user=this.ser.getUserFromStrorage();
    console.log(this.user);
   }
  
  ngOnInit(): void {
    
    
  }

}

interface Transaction {
  name: string;
  value: any;
}
