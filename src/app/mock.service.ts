import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {mock} from './mocks';
import {Apply} from "./models/apply";
import {Candidate} from "./models/candidate";
import {Company} from "./models/company";
import {PaginationMod} from "./models/pagination-mod";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  applies: Apply[] = [];

  constructor(private spinner: NgxSpinnerService) {
    this.buildApplies();
  }

  generateRequest<T>(obj: T): Observable<T> {
    this.spinner.show();
    return new Observable<T>(obs => {
      setTimeout(() => {
        this.spinner.hide();
        obs.next(obj);
        obs.complete();
      }, 500);
    });
  }

  get<T>(route: string): Observable<T> {
    return this.generateRequest(mock[route]);
  }

  first<T>(pathString: string): Observable<T> {
    const path = pathString.split('/');
    return this.generateRequest(mock[path[0]][0]);
  }

  post(route?: any, body?: any): Observable<any> {
    return this.generateRequest(true);
  }

  getApplyHistory(page: number, itemNumber: number, searchData?: any): Observable<PaginationMod<Apply>> {
    let applies: Apply[] = this.applies;
    if (searchData) {
      applies = this.applies.filter((apply: Apply) => {
        if (searchData.companyId && !(apply.company && apply.company.id === searchData.companyId)) {
          return false;
        }
        if (searchData.candidateId && !(apply.candidate && apply.candidate.id === searchData.candidateId)) {
          return false;
        }
        return true;
      });
    }
    const data: Apply[] = applies.slice((page - 1) * itemNumber, page * itemNumber);
    const pag: PaginationMod<Apply> = {
      data: data,
      totalItems: this.applies.length
    };
    return this.generateRequest(pag);
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
