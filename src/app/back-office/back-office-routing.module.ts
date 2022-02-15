import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {CandidateNewComponent} from "./candidate-new/candidate-new.component";
import {CompanyNewComponent} from "./company-new/company-new.component";
import {VacancyNewComponent} from "./vacancy-new/vacancy-new.component";

const routes: Routes = [
  {path: 'candidate-new', component: CandidateNewComponent},
  {path: 'company-new', component: CompanyNewComponent},
  {path: 'vacancy-new', component: VacancyNewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BackOfficeRoutingModule {
}
