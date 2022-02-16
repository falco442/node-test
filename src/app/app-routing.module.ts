import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: ''},
  {path: 'candidate', loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule)},
  {path: 'back-office', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)},
  {path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
