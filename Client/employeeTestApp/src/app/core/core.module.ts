import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { Employeetore } from '../logic/store/employeeStore';

@NgModule
({
  providers: [
    Employeetore
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbButtonsModule
  ]
})

export class CoreModule {

}
