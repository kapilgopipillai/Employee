import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Table } from 'primeng/table';
import { IEmployeeModel } from 'src/app/logic/model/IEmployeeModel';
import { Employeetore } from 'src/app/logic/store/employeeStore';
import { environment, defaultId } from '../../../environments/environment';

@Component({
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit  {

  title = 'Employee';

  // @ViewChild('employeeForm') employeeForm: NgForm;
  // @ViewChild('manufacturerGrid') grid: Table;

  employee: IEmployeeModel;

  employeeList: IEmployeeModel[] = [];


  gridSize: number = environment.defaultGridSize;
  gridSizeOptions: number[] = environment.defaultGridSizeOptions; columns: any[] = [
    { field: 'id', header: '', sortable: false, visible: false },
    { field: 'name', header: 'Name', sortable: true, sortField: 'name', visible: true },
    { field: 'PhoneNumber', header: 'PhoneNumber', sortable: false, sortField: 'PhoneNumber', visible: true },
    { field: 'EmailAddress', header: 'EmailAddress', sortable: false, sortField: 'EmailAddress', visible: true }
  ];

  constructor(public employeetore: Employeetore) {
    this.employee = {} as IEmployeeModel;
  }

  ngOnInit() {
    this.employeetore.loadEmployees().subscribe(data => {
      debugger;
      console.log(data);
    });

    // this.employeetore.loadEmployee('D14874B4-104A-4BD2-8070-5012C842DDCB').subscribe(() => {
    //   debugger;
    //   this.employee = this.employeetore.state.entry.data;
    // });
  }


  async onSubmit() {

    // this.employeetore.createEmployee(this.employee).subscribe(data => {
    //   debugger;
    //   console.log(data);
    // });


    // this.employeetore.updateEmployee(this.employee).subscribe(()=> {

    // });

    // this.employeetore.deleteEmployee('D14874B4-104A-4BD2-8070-5012C842DDCB').subscribe(() => {

    // });

  }




}
