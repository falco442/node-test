import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateRoutingModule} from "./candidate-routing.module";
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';


@NgModule({
  declarations: [
    VacancyListComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule {
}
