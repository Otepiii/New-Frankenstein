import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: Day1Component },
  { path: '', component: Day2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
