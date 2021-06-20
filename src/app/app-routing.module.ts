import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { AdminCandidateComponent } from './admin/admin-candidate/admin-candidate.component';
import { AdminCompanyComponent } from './admin/admin-company/admin-company.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminJobComponent } from './admin/admin-job/admin-job.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { ApproveComponent } from './admin/approve/approve.component';
import { CategoryComponent } from './admin/category/category.component';
import { UpdateDetailsComponent } from './admin/update-details/update-details.component';
import { AdminGuard } from './AuthGuard/admin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  
  {
    path:'registration',
    component:RegistrationComponent,
    pathMatch:'full'
  },
  // admin routes
  {
    path:'admin',
    component:AdminDashbordComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:AdminHomeComponent
      },
    {
      path:'profile',
      component:AdminProfileComponent
    },
    {
      path:'updatedetails',
      component:UpdateDetailsComponent
    },
    {
      path:'category',
      component:CategoryComponent
    },
    {
      path:'addcategory',
      component:AddcategoryComponent
    },
    {
      path:'approve',
      component:ApproveComponent
    },
    {
      path:'jobs',
      component:AdminJobComponent
    },
    {
      path:'company',
      component:AdminCompanyComponent
    },
    {
      path:'candidate',
      component:AdminCandidateComponent
    },
    //end of admin routes
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
