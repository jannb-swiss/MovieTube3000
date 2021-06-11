import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllComponent} from "./components/all/all.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {DiscoverPageComponent} from "./sites/discover-page/discover-page.component";


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
