import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IEmployeeModel } from 'src/app/logic/model/IEmployeeModel';
import { Employeetore } from 'src/app/logic/store/employeeStore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  employee: IEmployeeModel;


  constructor(public employeetore: Employeetore, private router: Router, private messageService: MessageService
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
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Employee created successfully!'});
        setTimeout(()=>{
          this.router.navigate(['/']);
        }, 2000);
      });
    } else {
      this.employeetore.updateEmployee(this.employee).subscribe(()=> {
        this.employeetore.disposeEntry();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Employee updated successfully!'});
        setTimeout(()=>{
          this.router.navigate(['/']);
        }, 2000);
      });
    }
  }

  back(){
    this.employeetore.disposeEntry();
    this.router.navigate(['/']);
  }
}
