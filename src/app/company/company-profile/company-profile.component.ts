import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {MockService} from "../../mock.service";
import {Company} from "../../models/company";
import {FormBuilder} from "@angular/forms";
import {AlertService} from "../../alert.service";

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  logged: boolean = false;
  company?: Company;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mockService: MockService,
    private fb: FormBuilder,
    private alert: AlertService
  ) {

    this.subscription.add(
      this.activatedRoute.data.subscribe((data: any) => {
        if (data.logged) {
          this.logged = data.logged;
          this.subscription.add(
            this.mockService.first<Company>('companies')
              .subscribe((data: Company) => this.company = data)
          );
        }
      })
    );
  }

  submit(data: any) {
    this.mockService.post(data)
      .subscribe(() => this.alert.success());
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
