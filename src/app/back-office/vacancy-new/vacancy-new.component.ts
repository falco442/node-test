import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../models/company";
import {MockService} from "../../mock.service";
import {AlertService} from "../../alert.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vacancy-new',
  templateUrl: './vacancy-new.component.html',
  styleUrls: ['./vacancy-new.component.scss']
})
export class VacancyNewComponent implements OnInit, OnDestroy {

  fg: FormGroup;
  companies?: Company[];

  subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private mock: MockService,
    private alert: AlertService
  ) {
    this.fg = fb.group({
      company: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  getCompanies() {
    this.subscription.add(
      this.mock.get<Company[]>('companies')
        .subscribe((companies: Company[]) => this.companies = companies)
    );
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    this.alert.success();
    this.fg.reset();
  }

}
