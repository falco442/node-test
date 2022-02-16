import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CandidateNewComponent} from "./candidate-new/candidate-new.component";
import {CompanyNewComponent} from "./company-new/company-new.component";
import {VacancyNewComponent} from "./vacancy-new/vacancy-new.component";
import {BackOfficeGeneralComponent} from "./back-office-general/back-office-general.component";

const routes: Routes = [
  {
    path: '',
    component: BackOfficeGeneralComponent,
    children: [
      {path: '', redirectTo: 'candidate-new'},
      {path: 'candidate-new', component: CandidateNewComponent},
      {path: 'company-new', component: CompanyNewComponent},
      {path: 'vacancy-new', component: VacancyNewComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule {
}
