import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';

const routes: Routes = [
  {
    path:'',
    redirectTo : 'index',
    pathMatch: 'full'
  },
  {
     component :MainAppComponent,
     path: 'index',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
