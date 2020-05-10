import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then((m)=>m.EmployeeModule) // dynamically load this module on startup
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
