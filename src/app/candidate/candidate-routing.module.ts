import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'vacancies'},
  {path: 'vacancies', component: VacancyListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandidateRoutingModule {
}
