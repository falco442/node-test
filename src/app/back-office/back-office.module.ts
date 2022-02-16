import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackOfficeRoutingModule} from "./back-office-routing.module";
import {CandidateNewComponent} from './candidate-new/candidate-new.component';
import {CompanyNewComponent} from './company-new/company-new.component';
import {VacancyNewComponent} from './vacancy-new/vacancy-new.component';
import {BackOfficeGeneralComponent} from './back-office-general/back-office-general.component';
import {TabsModule} from "ngx-bootstrap/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {CompanyModule} from "../company/company.module";


@NgModule({
  declarations: [
    CandidateNewComponent,
    CompanyNewComponent,
    VacancyNewComponent,
    BackOfficeGeneralComponent,
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    TabsModule,
    ReactiveFormsModule,
    CompanyModule
  ]
})
export class BackOfficeModule {
}
