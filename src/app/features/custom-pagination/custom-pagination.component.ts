import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent implements OnInit {

  @Input()
  totalItems: number = 10;

  @Input()
  templateRef: TemplateRef<any> | null = null;

  @Input()
  itemsPerPage: number = 10;

  @Output('pageChanged')
  pageChangedEmitter = new EventEmitter<PageChangedEvent>();

  currentPage: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  changePage(event: PageChangedEvent) {
    this.pageChangedEmitter.emit(event);
    this.currentPage = event.page;
  }

}
