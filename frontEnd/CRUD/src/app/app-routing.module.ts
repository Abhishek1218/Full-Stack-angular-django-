import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUsersDetailsComponent } from './components/add-users-details/add-users-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'addUserDetails', component:AddUsersDetailsComponent},
  {path:'homeComponent',component:HomeComponentComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'',redirectTo:'/homeComponent',pathMatch:'full'},
  {path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
