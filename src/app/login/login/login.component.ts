import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

export interface Tile{
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

  constructor(private breakpointObserver: BreakpointObserver) { }
  
  public tiles: Tile[]= [  
    { cols: 2, rows: 2, color: 'lightpink'},  
  ];

  ngOnInit() {
  }

}
