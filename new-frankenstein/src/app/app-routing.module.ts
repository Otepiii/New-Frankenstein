import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Day1Component } from './day1/day1.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: Day1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
