import {Injectable} from '@angular/core';
import {first, Observable, of} from "rxjs";
import {mock} from './mocks';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() {
  }

  get<T>(route: string): Observable<T> {
    return of(mock[route]);
  }

  first<T>(pathString: string): Observable<T> {
    const path = pathString.split('/');
    return of(mock[path[0]])
      .pipe(first());
  }

  post(route?: any, body?: any): Observable<any> {
    return of(true);
  }
}
