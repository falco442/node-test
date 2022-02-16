import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {MockService} from "../../mock.service";
import {Company} from "../../models/company";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../alert.service";

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  logged: boolean = false;

  fg: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mockService: MockService,
    private fb: FormBuilder,
    private alert: AlertService
  ) {
    this.fg = fb.group({
      id: [],
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });

    this.subscription.add(
      this.activatedRoute.data.subscribe((data: any) => {
        if (data.logged) {
          this.logged = data.logged;
          this.subscription.add(
            this.mockService.first<Company>('companies')
              .subscribe((data: Company) => this.fg.patchValue(data))
          );
        }
      })
    );
  }

  submit() {
    this.mockService.post()
      .subscribe(() => this.alert.success());
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
