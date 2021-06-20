import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UpdateDetailsComponent } from './admin/update-details/update-details.component';
import { CategoryComponent } from './admin/category/category.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ApproveComponent } from './admin/approve/approve.component';
import { AdminJobComponent } from './admin/admin-job/admin-job.component';
import { AdminCompanyComponent } from './admin/admin-company/admin-company.component';
import { AdminCandidateComponent } from './admin/admin-candidate/admin-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    AdminDashbordComponent,
    SidebarComponent,
    AdminProfileComponent,
    AdminHomeComponent,
    UpdateDetailsComponent,
    CategoryComponent,
    AddcategoryComponent,
    ApproveComponent,
    AdminJobComponent,
    AdminCompanyComponent,
    AdminCandidateComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
