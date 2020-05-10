export interface allEmployees {
    status: string;
    data: Employee[]
}

export interface Employee {
    employee_age: string
    employee_name: string
    employee_salary: string
    id: string
}

export interface empDto {
    name: string;
    salary: string;
    age: string;
}

export interface SingleEmployee {
    status: string;
    data: Employee;
}