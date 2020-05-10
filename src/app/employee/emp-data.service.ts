import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap, retry } from 'rxjs/operators';
import { empDto } from './interfaces/all.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
    
  constructor(private http: HttpClient) { }

  getAllEmpAPI ='https://employees06.herokuapp.com/employee';
  createNewEmpAPI = 'https://employees06.herokuapp.com/employee/create';
  empAPI = 'https://employees06.herokuapp.com/employee';
  updateEmpAPI = 'https://employees06.herokuapp.com/employee/update';

  getAllEmployees() {
    return this.http.get(this.getAllEmpAPI);
  }

  createEmployee(empDto: empDto) {
    return this.http.post(this.createNewEmpAPI, empDto)
  }

  getEmployee(id: string) {
    return this.http.get(`${this.empAPI}/${id}`)
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.empAPI}/${id}`)
  }

  updateEmployee(id: string, empDto: empDto) {
    return this.http.patch(`${this.updateEmpAPI}/${id}`, empDto)
  }
}
