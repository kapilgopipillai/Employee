import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployeeModel } from 'src/app/logic/model/IEmployeeModel';
import { Employeetore } from 'src/app/logic/store/employeeStore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee.list.component.html'
})
export class EmployeeListComponent implements OnInit {


  employeeList: IEmployeeModel[] = [];
  totalRecords: number = 0;

  gridSize: number = environment.defaultGridSize;
  gridSizeOptions: number[] = environment.defaultGridSizeOptions; columns: any[] = [
    { field: 'id', header: '', sortable: false, visible: false },
    { field: 'name', header: 'Name', sortable: true, sortField: 'name', visible: true },
    { field: 'phoneNumber', header: 'Phone Number', sortable: false, sortField: 'PhoneNumber', visible: true },
    { field: 'emailAddress', header: 'Email', sortable: false, sortField: 'EmailAddress', visible: true }
  ];

  constructor(public employeetore: Employeetore, private router: Router) {}
  ngOnInit() {
    this.employeetore.loadEmployees().subscribe(data => {
      this.employeeList = this.employeetore.state.list.data;
      this.totalRecords = this.employeetore.state.list.count;
    });
  }

  async onEmployeeDetails(id: string) {
    if (await this.employeetore.loadEmployee(id).toPromise()) {
        this.router.navigate(['/view-employee', id]);
      }
  }

  addNew() {
    this.router.navigate(['/view-employee', "new"]);
  }
  deleteEmployee(id: string){
    this.employeetore.deleteEmployee(id).subscribe(() => {
      this.employeetore.loadEmployees().subscribe(data => {
        this.employeeList = this.employeetore.state.list.data;
        this.totalRecords = this.employeetore.state.list.count;
      });
    });
  }

}
