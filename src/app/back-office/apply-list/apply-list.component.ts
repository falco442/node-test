import {Component, OnDestroy, OnInit} from '@angular/core';
import {MockService} from "../../mock.service";
import {Apply} from "../../models/apply";
import {Subscription} from "rxjs";
import {PaginationMod} from "../../models/pagination-mod";
import {PageChangedEvent} from "ngx-bootstrap/pagination";

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

  constructor(private mock: MockService) {
  }

  getApplies() {
    this.subscription.add(
      this.mock.getApplyHistory(this.page, this.itemsNumber)
        .subscribe((pag: PaginationMod<Apply>) => {
          this.pag = pag;
          console.log(this.pag);
        })
    );
  }

  ngOnInit(): void {
    this.getApplies();
  }

  ngOnDestroy() {
  }

  pageChanged(event: PageChangedEvent) {
    console.log(event);
    this.page = event.page;
    this.getApplies();
  }

}
