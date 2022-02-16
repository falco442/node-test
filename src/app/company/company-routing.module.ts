import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CompanyProfileComponent} from "./company-profile/company-profile.component";

const routes: Routes = [
  {path: '', redirectTo: 'register'},
  {path: 'register', component: CompanyProfileComponent},
  {path: 'profile', component: CompanyProfileComponent, data: {logged: true}},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
