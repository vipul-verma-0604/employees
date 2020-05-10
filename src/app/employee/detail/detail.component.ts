import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../interfaces/all.interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  // initalize employee with empty data to prevent 'undefined' error
  @Input() employee: Employee = {
    employee_age: '',
    employee_name: '',
    employee_salary: '',
    id: ''
  }
  @Output('onBack') back: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  // on back button send value to 'VIEW' variable so All employees data can be shown
  onBack(e: any) {
    e.preventDefault();
    this.back.emit('allEmp');
  }

}
