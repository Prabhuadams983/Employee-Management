import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginComponent } from './login/login.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import {EmployeeService} from './services/employee-service.service';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilterPipe } from './utils/filters/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material";
import { ModalDialogComponent } from './utils/modal-dialog/modal-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEmployeeComponent,
    LoginComponent,
    EmployeesListComponent,
    NavBarComponent,
    FilterPipe,
    ModalDialogComponent
  ],
  entryComponents:[ModalDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
