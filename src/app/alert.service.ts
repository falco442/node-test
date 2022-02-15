import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  showSubj = new BehaviorSubject<any>(false);

  constructor() {
  }

  success(message?: string, title?: string) {
    this.showSubj.next({
      title: title,
      message: message
    });
  }
}
