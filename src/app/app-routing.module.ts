import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FrontPageComponent} from "./components/front-page/front-page.component";
import {HottestMoviesComponent} from "./components/hottest-movies/hottest-movies.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {FavoriteMoviesComponent} from "./components/favorite-movies/favorite-movies.component";
import {TopRatedMoviesComponent} from "./components/top-rated-movies/top-rated-movies.component";

const routes: Routes = [
  {path: "", component: FrontPageComponent},
  {path: "hot", component: HottestMoviesComponent},
  {path: "best", component: TopRatedMoviesComponent},
  {path: "favorites", component: FavoriteMoviesComponent},
  {path: "discover", component: DiscoverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
