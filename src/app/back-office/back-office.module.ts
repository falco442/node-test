import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackOfficeRoutingModule} from "./back-office-routing.module";
import {CandidateNewComponent} from './candidate-new/candidate-new.component';
import {CompanyNewComponent} from './company-new/company-new.component';
import {VacancyNewComponent} from './vacancy-new/vacancy-new.component';


@NgModule({
  declarations: [
    CandidateNewComponent,
    CompanyNewComponent,
    VacancyNewComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule {
}
