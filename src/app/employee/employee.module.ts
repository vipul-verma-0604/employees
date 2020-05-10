import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AllEmpComponent } from './all-emp/all-emp.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AllEmpComponent, DetailComponent, CreateComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmployeeModule { }
