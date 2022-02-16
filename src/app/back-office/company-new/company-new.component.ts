import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../alert.service";

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.scss']
})
export class CompanyNewComponent implements OnInit {

  constructor(private alert: AlertService) {
  }

  ngOnInit(): void {
  }

  submit(data: any) {
    this.alert.success();
  }

}
