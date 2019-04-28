import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MAIN_ROUTES } from './view/main/main.routes';

const routes: Routes = [
  ...MAIN_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
