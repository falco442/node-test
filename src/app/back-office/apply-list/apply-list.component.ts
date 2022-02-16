import {Component, OnDestroy, OnInit} from '@angular/core';
import {MockService} from "../../mock.service";
import {Apply} from "../../models/apply";
import {forkJoin, Subscription} from "rxjs";
import {PaginationMod} from "../../models/pagination-mod";
import {PageChangedEvent} from "ngx-bootstrap/pagination";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Candidate} from "../../models/candidate";
import {Company} from "../../models/company";

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.scss']
})
export class ApplyListComponent implements OnInit, OnDestroy {

  pag?: PaginationMod<Apply>;
  subscription = new Subscription();
  page: number = 1;
  itemsNumber: number = 10;
  totalItems?: number;
  searchForm: FormGroup;

  candidates?: Candidate[];
  companies?: Company[];

  constructor(
    private mock: MockService,
    private fb: FormBuilder
  ) {
    this.searchForm = fb.group({
      candidateId: [],
      companyId: []
    });
  }

  getSelects() {
    forkJoin([
      this.mock.get('candidates'),
      this.mock.get('companies')
    ])
      .subscribe((data: any[]) => {
        this.candidates = data[0];
        this.companies = data[1];
      });
  }

  getApplies(data?: any) {
    if (data) {
      this.page = 1;
    }
    this.subscription.add(
      this.mock.getApplyHistory(this.page, this.itemsNumber, data)
        .subscribe((pag: PaginationMod<Apply>) => this.pag = pag)
    );
  }

  ngOnInit(): void {
    this.getApplies();
    this.getSelects();
  }

  ngOnDestroy() {
  }

  pageChanged(event: PageChangedEvent) {
    console.log(event);
    this.page = event.page;
    this.getApplies();
  }

}
