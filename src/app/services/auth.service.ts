import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _route: Router) {  }

  sendToken(token:string)
  {
      localStorage.setItem("LoggedInUser", token);
  }

  getToken()
  {
      return localStorage.getItem("LoggedInUser");
  }

  isLoggedIn()
  {
      return this.getToken() !== null;
  }

  logout()
  {
      localStorage.removeItem("LoggedInUser");
      this._route.navigate(["login/login"]);
  }
}
