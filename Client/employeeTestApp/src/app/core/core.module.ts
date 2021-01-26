import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { Employeetore } from '../logic/store/employeeStore';

@NgModule
({
  providers: [
    Employeetore,
    MessageService
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbButtonsModule
  ]
})

export class CoreModule {

}
