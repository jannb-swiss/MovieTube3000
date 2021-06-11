import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllComponent} from "./components/all/all.component";



const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
