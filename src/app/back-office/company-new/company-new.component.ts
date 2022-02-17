import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../alert.service";
import {MockService} from "../../mock.service";

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.scss']
})
export class CompanyNewComponent implements OnInit {

  constructor(
    private alert: AlertService,
    private mock: MockService
  ) {
  }

  ngOnInit(): void {
  }

  submit(data: any) {
    this.mock.post()
      .subscribe(() => this.alert.success());
  }

}
