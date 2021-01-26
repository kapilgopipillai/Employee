
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootShellComponent } from './root-shell/root-shell.component';
import { RootComponent } from './root/root.component';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee.list.component';
import {ToastModule} from 'primeng/toast';

const mainRouts: Route[] = [
  { path: '', component: RootComponent, children: [
      { path: '', component: EmployeeListComponent },
      { path: 'view-employee/:id', component: EmployeeComponent}
    ]
  },
];

@NgModule({
  declarations: [
    RootShellComponent,
    RootComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    CoreModule,
    CommonModule,
    FormsModule,
    TableModule,
    ToastModule,

    RouterModule.forRoot(mainRouts)
  ],
  bootstrap: [RootShellComponent]
})
export class MainModule {

}
