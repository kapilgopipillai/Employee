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
  totalRecords: number = 0;

  gridSize: number = environment.defaultGridSize;
  gridSizeOptions: number[] = environment.defaultGridSizeOptions; columns: any[] = [
    { field: 'id', header: '', sortable: false, visible: false },
    { field: 'name', header: 'Name', sortable: true, sortField: 'name', visible: true },
    { field: 'phoneNumber', header: 'Phone Number', sortable: false, sortField: 'PhoneNumber', visible: true },
    { field: 'emailAddress', header: 'Email', sortable: false, sortField: 'EmailAddress', visible: true }
  ];

  constructor(public employeetore: Employeetore) {
    this.employee = {} as IEmployeeModel;
  }

  ngOnInit() {
  }






}
