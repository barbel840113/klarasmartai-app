import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AppCustomDataDataSource } from './app-custom-data-datasource';

@Component({
  selector: 'app-app-custom-data',
  templateUrl: './app-custom-data.component.html',
  styleUrls: ['./app-custom-data.component.css']
})
export class AppCustomDataComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AppCustomDataDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AppCustomDataDataSource(this.paginator, this.sort);
  }
}
