import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  //jobcategory?:JobCategoryClass
   categiry={
    jobCategiry:''
   }
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
  }
  onSubmit()
  { 
    console.log(this.categiry);
   
      this.ser.addJobcategory(this.categiry).subscribe(
        (data)=>{
          console.log(data);
          Swal.fire('Add Category','add category in your list','success');
        },
        (error)=>{
          Swal.fire('Fali',"server Not responding",'error');
        }
      )
    

  }

}
