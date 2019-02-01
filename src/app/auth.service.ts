import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from "rxjs";
import { Auth } from './auth';

@Injectable()
export class AuthService {
  private user = new BehaviorSubject<Auth>(null);
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor() {
    this.userEmitChange(this.getUser());
  }
  public userEmitChange(usr: Auth) {
    this.user.next(usr);
  }
  private getUser(): Auth {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  public LoggedInUser(): Observable<Auth> {
    return this.user.asObservable();
  }
  public IsLoggedIn(): Observable<boolean> {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (user)
      this.isLoggedIn.next(true);
    else
      this.isLoggedIn.next(false);

    return this.isLoggedIn.asObservable();
  }
  public Login(user: Auth): Observable<Auth> {
    if (user && user != null) {
      user.loggedInDate = new Date();
      localStorage.removeItem('currentUser');
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.isLoggedIn.next(true);
      this.userEmitChange(user);
    }
    return of(user);
  }
  public logout(): void {
    localStorage.removeItem('currentUser');
    this.isLoggedIn.next(false);
    this.userEmitChange(null);
  }
}
