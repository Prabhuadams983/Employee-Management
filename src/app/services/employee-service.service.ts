import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  public employeesList:any;

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  addEmployee(data){
    return this.http.post(this.baseUrl+"add",{"empData":data});
  }
  getEmployeesList(){
    return this.http.get(this.baseUrl+"getList");
  }
  deleteEmployee(id){
    const params = new HttpParams().set("empId",id);
    return this.http.delete(this.baseUrl+"deleteEmployee",{params});
  }
  filterByDesignation(designation){
    const params = new HttpParams().set("designation",designation);
    return this.http.get(this.baseUrl+"filterByDesignation",{params});
  }

  uploadImage(image){
    return this.http.post(this.baseUrl+"uploadImage",image);
  }
}
