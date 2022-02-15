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
}
