import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, Validators } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * 
   */
  cards: any;
  /**
   * 
   */
  username: string;

  /**
   * Password
   */
  password: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
        ];
      }
      return [
        { title: 'Card 1', cols: 2, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  public tiles: Tile[] = [
    { cols: 2, rows: 2, color: 'lightpink' },
  ];

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
  }

}
