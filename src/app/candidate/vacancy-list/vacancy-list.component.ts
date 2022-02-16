import {Component, OnDestroy, OnInit} from '@angular/core';
import {Vacancy} from "../../models/vacancy";
import {MockService} from "../../mock.service";
import {AlertService} from "../../alert.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit, OnDestroy {

  vacancies?: Vacancy[];
  subscription = new Subscription();

  constructor(
    private mockService: MockService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.subscription.add(
      this.mockService.get<Vacancy[]>('vacancies')
        .subscribe((vacancies: Vacancy[]) => this.vacancies = vacancies)
    );
  }

  candidateTo(vacancy: Vacancy) {
    this.subscription.add(
      this.mockService.post(vacancy)
        .subscribe(() => this.alert.success('Candidatura effettuata'))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
