import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyRoutingModule} from "./company-routing.module";
import {CompanyProfileComponent} from './company-profile/company-profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CompanyFormComponent} from './company-form/company-form.component';


@NgModule({
  declarations: [
    CompanyProfileComponent,
    CompanyFormComponent
  ],
  exports: [
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule {
}
