import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  id: number;
  employee: Observable<Employee[]>;;
  employeeList : any ;
  employeeAvgSalary : any;
  employeAvgAge : any;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {

     this.employeeService.getEmployeesList()
    .subscribe(data => {
      console.log(data)
      this.employeeList = data;
      let avgsalary =0;
      let avgAge = 0;
      this.employeeList.forEach(element => {
        console.log('salary :',element.salary);
        avgsalary = avgsalary +element.salary;
        avgAge = avgAge+ element.age;
      });
      console.log('avg salary :',avgsalary/this.employeeList.length);
      this.employeeAvgSalary = avgsalary/this.employeeList.length;
      this.employeAvgAge = avgAge/this.employeeList.length;
     // console.log('employe  list:',this.employeeList);

    }, error => console.log(error));;
    
    //this.employeeList = this.employee;
    
   // this.id = this.route.snapshot.params['id'];
    
    // this.employeeService.getEmployee(this.id)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.employee = data;
    //   }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}




