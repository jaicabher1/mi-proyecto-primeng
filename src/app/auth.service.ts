import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(localStorage.getItem('isLoggedIn') === 'true');

  isLoggedIn = this.loggedIn.asObservable();

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
  }

  checkLogin() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
