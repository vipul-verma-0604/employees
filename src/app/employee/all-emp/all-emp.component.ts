import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';
import { allEmployees, Employee, SingleEmployee } from '../interfaces/all.interfaces';


@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.css']
})
export class AllEmpComponent implements OnInit {
  
  constructor(private empDataService: EmpDataService) { }

  employees: Employee[];
  p: number = 1;
  view: string = 'allEmp'; 
  emp: Employee;
  type: string; 

  ngOnInit() {
    // Get all employees data
    this.empDataService.getAllEmployees().subscribe(
      (allEmp: allEmployees) => {
        console.log(allEmp)
        this.employees = allEmp.data; // assign all employees data to local array for rendering in HTML
      }
    )
  }
  
  getDetail(e: any, id: string) {
    e.preventDefault();
    this.view = 'details'; // show details page

    // Get employee data on the basis of ID
    this.empDataService.getEmployee(id).subscribe(
      (resp: SingleEmployee) => {
        this.emp = resp.data;
      }
    )
  } 
  
  // Add new employee View
  onAddEmployee() {
    this.view = 'create'; // show create new employee page
    this.type = 'add'; // conditionally show 'Add employee' Button
  }

  // Back to all employee
  onback(val: string) {
    this.view = val; // Go Back to Main page
    this.ngOnInit(); // Force page to render again to see changes
  }

  // To delete employee
  onDelete(id: string) {
    this.empDataService.deleteEmployee(id).subscribe(
      (resp: string) => {
        console.log(resp)
        if(resp) {
          this.ngOnInit() // if response force page to render again to see changes
        }
      }
    )
  }

  // To edit existing employee
  onEdit(emp: Employee) {
    this.view = 'create'; // show create new employee page
    this.emp = emp; // send values of current employee to create employee page using @Input
    this.type = 'edit'; // conditionally show 'Update employee' Button
  }

  // send msg to all employee page
  onMsg(msg: string) {
    // if msg euals to 'refresh' then change view to all employees
    // Forcefully render page to see the updates done during edit.
    if(msg == 'refresh') {
      this.view = 'allEmp';
      this.ngOnInit();
    }
  }

}
