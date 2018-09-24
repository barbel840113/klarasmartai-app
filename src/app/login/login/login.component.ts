import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

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

  /**
   * 
   */
  username: string;

  /**
   * Password
   */
  password: string;

  constructor(private breakpointObserver: BreakpointObserver) {


  }

  public tiles: Tile[] = [
    { cols: 2, rows: 2, color: 'lightpink' },
  ];

  ngOnInit() {
  }

}
