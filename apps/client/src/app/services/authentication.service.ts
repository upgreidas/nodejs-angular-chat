import { Injectable } from '@angular/core';
import { User } from '../../../../server/src/app/entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _user: User;

  private _token: string;

  constructor() {
    this._token = localStorage.getItem('token') || undefined;
  }

  setUser(user: User) {
    this._user = user;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);

    this._token = token;
  }

  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }

}