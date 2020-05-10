import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEmpComponent } from './all-emp/all-emp.component';


const routes: Routes = [
  {
    path: '',
    component: AllEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
