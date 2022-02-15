import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() {
  }

  get(route: string): Observable<any> {
    return of(eval(route));
  }

  post(route?: any, body?: any): Observable<any> {
    return of(true);
  }
}
