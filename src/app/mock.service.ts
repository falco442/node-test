import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {mock} from './mocks';
import {Apply} from "./models/apply";
import {Candidate} from "./models/candidate";
import {Company} from "./models/company";
import {PaginationMod} from "./models/pagination-mod";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  applies: Apply[] = [];

  constructor() {
    this.buildApplies();
  }

  get<T>(route: string): Observable<T> {
    return of(mock[route]);
  }

  first<T>(pathString: string): Observable<T> {
    const path = pathString.split('/');
    return of(mock[path[0]][0]);
  }

  post(route?: any, body?: any): Observable<any> {
    return of(true);
  }

  getApplyHistory(page: number, itemNumber: number): Observable<PaginationMod<Apply>> {
    const data: Apply[] = this.applies.slice((page - 1) * itemNumber, page * itemNumber);
    const pag: PaginationMod<Apply> = {
      data: data,
      totalItems: this.applies.length
    };
    return of(pag);
  }

  buildApplies() {
    const candidates = mock['candidates'];
    const companies = mock['companies'];
    const applies: Apply[] = [];
    let i = 0;
    candidates.forEach((candidate: Candidate) => {
      companies.forEach((company: Company) => {
        i++;
        this.applies.push({
          id: i,
          candidate: candidate,
          company: company
        } as Apply);
      });
    });
  }
}
