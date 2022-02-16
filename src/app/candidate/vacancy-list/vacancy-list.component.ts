import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../../models/vacancy";
import {MockService} from "../../mock.service";
import {AlertService} from "../../alert.service";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {

  vacancies?: Vacancy[];

  constructor(
    private mockService: MockService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.mockService.get<Vacancy[]>('vacancies')
      .subscribe(v => console.log(v));
  }

  candidateTo(vacancy: Vacancy) {
    this.mockService.post(vacancy)
      .subscribe(() => this.alert.success('Candidatura effettuata'));
  }

}
