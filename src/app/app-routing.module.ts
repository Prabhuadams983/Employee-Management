import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginComponent } from './login/login.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';


const routes: Routes = [
  {path:'',component:EmployeesListComponent},
  {path:'create',component:CreateEmployeeComponent},
  {path:'employees-list',component:EmployeesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
