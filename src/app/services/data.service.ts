import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private _loggedIn: boolean;
  private loginSource = new BehaviorSubject<boolean>(false);
  loginStatus = this.loginSource.asObservable();

  constructor() { }

  logIn(loggedIn: boolean){
    this._loggedIn = loggedIn;
    this.loginSource.next(loggedIn);
  }
}
