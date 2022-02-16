import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPaginationComponent} from './custom-pagination/custom-pagination.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CustomPaginationComponent
  ],
  exports: [
    CustomPaginationComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule
  ]
})
export class FeaturesModule {
}
