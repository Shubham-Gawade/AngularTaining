import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "employee-add", component: EmployeeAddComponent},
  {path: "employee-list", component: EmployeeListComponent},
  {path: "employee-edit/:id", component: EmployeeEditComponent},
  {path: "employee-details/:id", component: EmployeeDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
