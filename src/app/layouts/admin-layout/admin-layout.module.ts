import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';


import { AdminLayoutRoutes } from './admin-layout.routing';


import { EcommerceComponent } from '../../ecommerce/ecommerce.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,AngularMultiSelectModule
  ],
  declarations: [
    EcommerceComponent
  ]
})

export class AdminLayoutModule {}
