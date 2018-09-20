import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppComponent } from './main-app/main-app.component';

@NgModule({
  imports: [
    CommonModule,
    MainAppRoutingModule
  ],
  declarations: [MainAppComponent],
  exports: [ MainAppComponent]
})
export class MainAppModule { }
