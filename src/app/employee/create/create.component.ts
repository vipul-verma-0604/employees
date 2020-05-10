import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpDataService } from '../emp-data.service';
import { empDto, Employee, SingleEmployee } from '../interfaces/all.interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private empDataService: EmpDataService) { }
  @Input() emp: Employee;
  @Input() type: string;
  @Output('onBack') back: EventEmitter<string> = new EventEmitter();
  @Output('msg') msg: EventEmitter<string> = new EventEmitter();

  // Creating form using form builder
  employeeForm = this.formBuilder.group(
    {
      emp_name: ['', Validators.required],
      emp_salary: ['', Validators.required],
      emp_age: ['', Validators.required]
    }
  )

  ngOnInit() {
    // if emp variable gets values
    // then populate the inputs in html with same values coming from data table.
    // In case of Updating employee
    if(this.emp !== undefined && this.type == 'edit') {
      this.employeeForm.get('emp_name').setValue(this.emp.employee_name);
      this.employeeForm.get('emp_salary').setValue(this.emp.employee_salary);
      this.employeeForm.get('emp_age').setValue(this.emp.employee_age);
    }
  }

  // Submit data to API for create/update
  onSubmit() {
    console.log(this.employeeForm.value);
    // Get values from input fields to push to service for create/update
    const empDto: empDto = {
      name: this.employeeForm.get('emp_name').value,
      salary: this.employeeForm.get('emp_salary').value,
      age: this.employeeForm.get('emp_age').value
    }
    
    // When case is create
    if(this.type == 'add') {
      this.empDataService.createEmployee(empDto).subscribe(
        (resp: SingleEmployee) => {
          console.log(resp); 
          if(resp.status == 'success') {
            this.employeeForm.reset()
          }       
        }
      )
    }

    // when case is update
    if(this.type == 'edit') {
      this.empDataService.updateEmployee(this.emp.id, empDto).subscribe(
        (resp: SingleEmployee) => {
          console.log(resp); 
          if(resp) {
            this.msg.emit('refresh')
          }       
        }
      )
    }
    
  }

  // on back button send value to 'VIEW' variable so All employees data can be shown 
  onBack(e: any) {
    e.preventDefault();
    this.back.emit('allEmp');
  }

}
