import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  private data={};
  private employeeList:any;
  private selectedFile:File;
  private showSpinner=true;
  private showImage;
  private imgUrl:any="";
  @ViewChild('form',{static:false}) userForm:NgForm;

  constructor(private employeeService:EmployeeService,
              private router:Router) { }

  ngOnInit() {
  }

  addEmployee()
  {
    if(this.userForm.value.employeeName != "" || this.userForm.value.email != "" ||
    this.userForm.value.designation != "" || this.userForm.value.gender != "" || this.userForm.value.age != ""){
    this.data={
      name:this.userForm.value.employeeName,
      email:this.userForm.value.email,
      designation : this.userForm.value.designation,
      gender :this.userForm.value.gender,
      age : this.userForm.value.age,
      imgUrl:this.imgUrl
    }
  }
  
    this.employeeService.addEmployee(this.data).subscribe((response)=>{
      if(response["status"] == 200){
          this.router.navigateByUrl('/employees-list');
      }
    });

  }

  selectFile(event){
    this.selectedFile = <File>event.target.files[0];
    this.showSpinner = false;
    this.showImage = true;
    const formData = new FormData();
    formData.append('file',this.selectedFile,this.selectedFile.name);
    this.employeeService.uploadImage(formData).subscribe((response)=>{
      if(response !=null){
      this.showImage = false;
      this.showSpinner = true;
      this.imgUrl = response["File Path"];
      }
    });

  }

}
