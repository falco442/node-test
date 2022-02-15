import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../../models/vacancy";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {

  vacancies?: Vacancy[];

  constructor() {
  }

  ngOnInit(): void {
  }

  candidateTo(vacancy: Vacancy) {

  }

}
