import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service';
import { MatDialog } from "@angular/material";
import { ModalDialogComponent } from '../utils/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  private employeeList: any;
  private hideElem: boolean = true;
  constructor(private employeeService: EmployeeService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.employeeService.getEmployeesList().subscribe((response) => {
      this.employeeList = response;
    });
  }

  delete(event) {
    var row = event.currentTarget;
    var empId = row.getAttribute("id");
    // open dialog and store the value
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data: { 'title': 'Are you sure you want to delete ?' }
    });
    // after closed get observable
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        var currRow = row.parentNode.parentNode;
        this.employeeService.deleteEmployee(empId).subscribe((response) => {
          if (response["status"] == 200) {
            row.parentNode.parentNode.parentNode.removeChild(currRow);
          }
        });
      }
    })
  }

  filterByDesignation(value) {
    if (value != "") {
      this.employeeService.filterByDesignation(value).subscribe((response) => {
        this.employeeList = response["success"];
      });
    } else {
      this.ngOnInit();
    }
  }

}
