import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyRoutingModule} from "./company-routing.module";
import {CompanyProfileComponent} from './company-profile/company-profile.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule {
}
