import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployeeModel } from 'src/app/logic/model/IEmployeeModel';
import { Employeetore } from 'src/app/logic/store/employeeStore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  employee: IEmployeeModel;


  constructor(public employeetore: Employeetore, private router: Router
  ) {
    this.employee = {} as IEmployeeModel;
  }

  ngOnInit() {
    this.employee = this.employeetore.state.entry.data;

    if (!this.employee) {
      this.employee = {} as IEmployeeModel;
    }
  }

  async onSubmit() {
    debugger;
    if(this.employee.id === undefined){
      this.employeetore.createEmployee(this.employee).subscribe(data => {
        this.employeetore.disposeEntry();
        this.router.navigate(['/']);
      });
    } else {
      this.employeetore.updateEmployee(this.employee).subscribe(()=> {
        this.employeetore.disposeEntry();
        this.router.navigate(['/']);
      });
    }
  }

  back(){
    this.employeetore.disposeEntry();
    this.router.navigate(['/']);
  }
}
